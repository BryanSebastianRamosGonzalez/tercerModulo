import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRetailComponent } from './product-retail.component';

describe('ProductRetailComponent', () => {
  let component: ProductRetailComponent;
  let fixture: ComponentFixture<ProductRetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductRetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductRetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
