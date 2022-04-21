import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  postIdForm: FormGroup;

  result: string = '';

  constructor(
    private http: HttpClient,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.postIdForm = this.fb.group({
      number: new FormControl()
    });
  }

  onSubmit(): void {
    this.resetResult();
    let number = this.postIdForm.value.number;

    this.http.get<any>(`/posts/${number}`).subscribe(result => {
      this.result = JSON.stringify(result);
    });
  }

  reset(): void {
    this.resetResult();
    this.postIdForm.reset();
  }

  resetResult(): void {
    this.result = '';
  }

}
