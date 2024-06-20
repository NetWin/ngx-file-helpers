import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FilePickerDirective, NgxFileHelpersModule, ReadFile, ReadMode } from 'ngx-file-helpers';
import { ReadModePipe } from '../read-mode.pipe';

@Component({
  standalone: true,
  selector: 'app-file-picker-large-files-demo',
  templateUrl: './file-picker-large-files-demo.component.html',
  styleUrl: './file-picker-large-files-demo.component.css',
  imports: [MatButtonModule, NgxFileHelpersModule, ReadModePipe]
})
export class FilePickerLargeFilesDemoComponent {
  public readMode = ReadMode.Skip;
  public picked: ReadFile | null = null;
  public status: string | null = null;

  @ViewChild('filePicker', { static: false })
  private filePicker?: FilePickerDirective;

  onReadStart(fileCount: number) {
    this.status = `Reading ${fileCount} file(s)...`;
    this.picked = null;
  }

  onFilePicked(file: ReadFile) {
    this.picked = file;
  }

  onReadEnd(fileCount: number) {
    this.status = `Read ${fileCount} file(s) on ${new Date().toLocaleTimeString()}.`;
    this.filePicker?.reset();
  }
}
