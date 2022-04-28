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

  allBranchs = {
    "B-01":"Каракалпакский региональный филиал",
    "B-02":"Берунийский филиал",
    "B-03":"Кунгиратский филиал",
    "B-04":"Чимбойский филиал",
    "B-05":"Андижанский региональный филиал",
    "B-06":"Кургантепинский филиал",
    "B-07":"Ходжаабадский филиал",
    "B-08":"Бухарский региональный филиал",
    "B-09":"Когонский филиал",
    "B-10":"Джизакский региональный филиал",
    "B-11":"Янгиабадский филиал",
    "B-12":"Кашкадарьинский региональный филиал",
    "B-13":"Кукдалинский филиал",
    "B-14":"Яккабагский филиал",
    "B-15":"Навоийский региональный филиал",
    "B-16":"Наманганский областной филиал",
    "B-17":"Папский филиал",
    "B-18":"Учкурганский филиал",
    "B-19":"Самаркандский региональный филиал",
    "B-20":"Каттакурганский филиал",
    "B-21":"Сурхондарьинский региональный филиал",
    "B-22":"Кумкурганский филиал",
    "B-23":"Шурчинский филиал",
    "B-24":"Джаркурганский филиал",
    "B-25":"Сариасинский филиал",
    "B-26":"Сырдарьинский региональный филиал",
    "B-27":"Ташкентский городской региональный филиал",
    "B-28":"Ташкентский областной региональный филиал",
    "B-29":"Ферганский региональный филиал",
    "B-30":"Хорезмский региональный филиал",
    "B-31":"Янгиерский филиал",
    "B-32":"Кокандский филиал",
    "B-33":"Кувинский филиал",
    "B-34":"Маргиланский филиал",
    "B-35":"Ханкинский филиал",
    "B-36":"Хивинский филиал",
    "B-37":"Ахангаранский филиал",
    "B-38":"Бекобадский филиал",
    "B-39":"Янгиюльский филиал",
    "B-40":"Газалкентский филиал",
    "B-41":"Сергелийский филиал",
    "B-42":"Главное операционное управление",
    "B-43":"Галаасинский филиал",
    "B-44":"Яккасарайский филиал",
  };
  
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
