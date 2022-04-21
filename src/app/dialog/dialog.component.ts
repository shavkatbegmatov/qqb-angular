import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  
  freshnessList = ["Brand New", "Second Hand", "Refurbished"];
  productForm!: FormGroup;
  actionBtn: string = "Save";
  
  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      branch: ['', Validators.required],
      typeLoan: ['', Validators.required],
      currency: ['', Validators.required],
      startDate: ['', Validators.required],
      expirationDate: ['', Validators.required],
      amount: ['', Validators.required],
      arrears: ['', Validators.required],
      percent: ['', Validators.required],
      balance: ['', Validators.required],
    });

    if(this.editData) {
      this.actionBtn = "Update";
      this.productForm.controls['branch'].setValue(this.editData.branch);
      this.productForm.controls['typeLoan'].setValue(this.editData.typeLoan);
      this.productForm.controls['currency'].setValue(this.editData.currency);
      this.productForm.controls['startDate'].setValue(this.editData.startDate);
      this.productForm.controls['expirationDate'].setValue(this.editData.expirationDate);
      this.productForm.controls['amount'].setValue(this.editData.amount);
      this.productForm.controls['arrears'].setValue(this.editData.arrears);
      this.productForm.controls['percent'].setValue(this.editData.percent);
      this.productForm.controls['balance'].setValue(this.editData.balance);
    }
  }

  addProduct() {
    if(!this.editData) {
      if(this.productForm.valid) {
        this.api.postProduct(this.productForm.value)
        .subscribe({
          next: (res) => {
            alert("Product added successfully");
            this.productForm.reset();
            this.dialogRef.close('save');
          },
          error: () => {
            alert("Error while adding the product")
          }
        })
      }
    } else {
      this.updateProduct();
    }
  }

  updateProduct() {
    this.api.putProduct(this.productForm.value, this.editData.id)
    .subscribe({
      next: (res) => {
        // alert("Product updated Successfully");
        this.productForm.reset();
        this.dialogRef.close('update');
      },
      error: () => {
        alert("Error while updating the record!");
      }
    })
  }

}
