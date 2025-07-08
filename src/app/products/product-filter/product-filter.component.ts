import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../../shared/Models/Product';

const filters = [
  (item: Product) => true,
  (item: Product) => (item.tag === "Music"),
  (item: Product) => (item.tag === "Tools"),
  (item: Product) => (item.tag === "Clothing"),
  (item: Product) => (item.tag === "Food"),
  (item: Product) => (item.tag === "Decor"),
  (item: Product) => (item.tag === "Toys")
]

const sortFunctions: ((first: Product, second: Product) => number)[] = [
  (first, second) => first.id - second.id,
  (first, second) => second.id - first.id,
  (first, second) => first.name.localeCompare(second.name),
  (first, second) => second.name.localeCompare(first.name),
  (first, second) => first.price - second.price,
  (first, second) => second.price - first.price
];

export const searchFunction: (term: string) => (item: Product) => boolean = (term: string) => {
  term = term.toLowerCase();
  if (!term) {
    return (_: Product) => true;
  }
  return (item: Product) =>
    item.name.toLowerCase().includes(term);
};

@Component({
  selector: 'app-product-filter',
  standalone: false,
  templateUrl: './product-filter.component.html',
  styleUrl: './product-filter.component.css'
})
export class ProductFilterComponent {
  @Input() search: any;
  @Input() filter!: any;
  @Input() sorter!: any;
  @Output() filterChange = new EventEmitter<any>();
  @Output() sorterChange = new EventEmitter<any>();

  ngOnInit(): void {
    this.emitFilter(filters[this.listFilter]);
    this.emitSorter(sortFunctions[this.listSorter]);
  }

  listFilter: any = '0';
  listSorter: any = '0';

  emitFilter(filter: any) {
    this.filterChange.emit(filter);
  }

  emitSorter(sorter: any) {
    this.sorterChange.emit(sorter);
    this.emitSorter(this.sorter);
  }

  updateFilter(index: number) {
    this.filter = filters[index];
    this.emitFilter(this.filter);
  }

  updateSorter(index: number) {
    this.sorter = sortFunctions[index];
    this.emitSorter(this.sorter);
  }

}
