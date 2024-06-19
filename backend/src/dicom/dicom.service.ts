import { Injectable } from '@nestjs/common';
import * as dicomParser from 'dicom-parser';
import * as fs from 'fs';
import { z } from 'zod';

const dicomSchema = z.object({
  patientName: z.string().nullable(),
  studyDate: z.string().nullable(),
  modality: z.string().nullable(),
});

@Injectable()
export class DicomService {
  readDicomFile(filePath: string) {
    const dicomFileBuffer = fs.readFileSync(filePath);
    const dicomFile = new Uint8Array(dicomFileBuffer.buffer, dicomFileBuffer.byteOffset, dicomFileBuffer.byteLength);
    const dataSet = dicomParser.parseDicom(dicomFile);

    const dicomData = {
      patientName: dataSet.string('x00100010') || '',
      studyDate: dataSet.string('x00080020') || '',
      modality: dataSet.string('x00080060') || '',
    };

    return dicomSchema.parse(dicomData);
  }

  getDicomFile(filePath: string) {
    return fs.readFileSync(filePath);
  }
}
