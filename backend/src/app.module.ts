import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { DicomController } from './dicom/dicom.controller';
import { DicomService } from './dicom/dicom.service';

@Module({
  imports: [
    MulterModule.register({
      dest: './uploads',
    }),
  ],
  controllers: [DicomController],
  providers: [DicomService],
})
export class AppModule {}
