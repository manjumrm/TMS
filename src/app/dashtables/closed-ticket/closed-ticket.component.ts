import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';


export interface PeriodicElement {
  companyName: string;
  position: number;
  UserName: String;
  DisplayName: string;
  UserType: string;
  Email: string;
  Asignee:string;
  Severity:String;
  Attachment:String;
  Status:String;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, companyName: 'Hydrogen', UserName: "1.0079", DisplayName: 'H',UserType:"ABC",Email:"XYZ",Asignee:"abcd",Severity:"efgh",Attachment:"file",Status:"open"},
  {position: 2, companyName: 'Helium', UserName: "4.0026", DisplayName: 'He',UserType:"ABC",Email:"XYZ",Asignee:"abcd",Severity:"efgh",Attachment:"file",Status:"open"},
  {position: 3, companyName: 'Lithium', UserName:" 6.941", DisplayName: 'Li',UserType:"ABC",Email:"XYZ",Asignee:"abcd",Severity:"efgh",Attachment:"file",Status:"open"},
  {position: 4, companyName: 'Beryllium', UserName: "9.0122", DisplayName: 'Be',UserType:"ABC",Email:"XYZ",Asignee:"abcd",Severity:"efgh",Attachment:"file",Status:"open"},
  {position: 5, companyName: 'Boron', UserName: "10.811", DisplayName: 'B',UserType:"ABC",Email:"XYZ",Asignee:"abcd",Severity:"efgh",Attachment:"file",Status:"open"},
  {position: 6, companyName: 'Carbon', UserName: "12.0107", DisplayName: 'C',UserType:"ABC",Email:"XYZ",Asignee:"abcd",Severity:"efgh",Attachment:"file",Status:"open"},
  {position: 7, companyName: 'Nitrogen', UserName: "14.0067", DisplayName: 'N',UserType:"ABC",Email:"XYZ",Asignee:"abcd",Severity:"efgh",Attachment:"file",Status:"open"},
  {position: 8, companyName: 'Oxygen', UserName: "15.9994", DisplayName: 'O',UserType:"ABC",Email:"XYZ",Asignee:"abcd",Severity:"efgh",Attachment:"file",Status:"open"},
  {position: 9, companyName: 'Fluorine', UserName: "18.9984", DisplayName: 'F',UserType:"ABC",Email:"XYZ",Asignee:"abcd",Severity:"efgh",Attachment:"file",Status:"open"},
  {position: 10, companyName: 'Neon', UserName: "20.1797", DisplayName: 'Ne',UserType:"ABC",Email:"XYZ",Asignee:"abcd",Severity:"efgh",Attachment:"file",Status:"open"},
];


@Component({
  selector: 'app-closed-ticket',
  templateUrl: './closed-ticket.component.html',
  styleUrls: ['./closed-ticket.component.css']
})
export class ClosedTicketComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['position', 'companyName', 'UserName', 'DisplayName','UserType','Email','Asignee','Severity','Attachment','Status','action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


}
