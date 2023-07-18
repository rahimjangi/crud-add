import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent {
  educations: string[] = ["Primary education","Lower secondary education","Upper secondary education","Post-secondary non-tertiary education","Short-cycle tertiary education","Bachelor's or equivalent level","Master's or equivalent level","Doctoral or equivalent level"];
}
