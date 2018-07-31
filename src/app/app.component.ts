import { Component } from '@angular/core';
//import { SearchFormComponent } from './search-form/search-form.component';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Product Recommendation';
  selectedClient: string;
  searchResults: string;
  searchForm: FormGroup;

  ngOnInit() {
    this.searchForm = new FormGroup({
      searchString: new FormControl(
          '',[Validators.required]
          // [
          //     Validators.required,
          //     Validators.pattern('^[0-9]*$')
          // ]
      )
    });
  }

  search() {
    this.searchResults = this.searchForm.controls['searchString'].value;
  }
}
