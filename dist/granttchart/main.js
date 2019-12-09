(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_services/masterdata.service.ts":
/*!*************************************************!*\
  !*** ./src/app/_services/masterdata.service.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var Observable_1 = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var MasterService = /** @class */ (function () {
    //HttpClient should be passed as a parameter in constructor
    function MasterService(http) {
        this.http = http;
        //Mention API URL
        this.webApiUrl = localStorage.getItem('apiurl');
    }
    //private webApiUrl = localStorage.getItem('apiurl') +"/api/CSV/";
    //Create function to get the data
    MasterService.prototype.getJSON = function () {
        var headers = new http_1.HttpHeaders();
        //Mention http header details
        var finalheaders = headers.append('Content-Type', 'application/json');
        return this.http.get("./assets/apiurl.json", { headers: finalheaders });
        // .catch(this.handleError);
    };
    MasterService.prototype.getRoadMapData = function (filename) {
        //Create header object
        var headers = new http_1.HttpHeaders();
        //Mention http header details
        var finalheaders = headers.append('Content-Type', 'application/json');
        finalheaders.append("Access-Control-Allow-Origin", "true");
        //Call the get function
        return this.http.get(this.webApiUrl + "getAllExcelData?filename=" + filename, { headers: finalheaders });
    };
    MasterService.prototype.uploadSharePointFile = function () {
        //Create header object
        var headers = new http_1.HttpHeaders();
        //Mention http header details
        var finalheaders = headers.append('Content-Type', 'application/json');
        finalheaders.append("Access-Control-Allow-Origin", "true");
        //Call the get function
        return this.http.post(this.webApiUrl + "uploadSharePointFile", { headers: finalheaders });
    };
    //Error Handling
    MasterService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json() || 'Server error');
    };
    MasterService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], MasterService);
    return MasterService;
}());
exports.MasterService = MasterService;


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\r\n    font-family: 'Material Icons';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: url(https://fonts.gstatic.com/s/materialicons/v41/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format('woff2');\r\n  }\r\n  ::ng-deep .material-icons {\r\n    font-family: 'Material Icons' !important;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-size: 24px;\r\n    line-height: 1;\r\n    letter-spacing: normal;\r\n    text-transform: none;\r\n    display: inline-block;\r\n    white-space: nowrap;\r\n    word-wrap: normal;\r\n    direction: ltr;\r\n    -webkit-font-feature-settings: 'liga';\r\n    -webkit-font-smoothing: antialiased;\r\n  }\r\n  ::ng-deep .mat-form-field{\r\npadding-right:30px;\r\n  }\r\n  ::ng-deep  .cdk-overlay-pane-select-search{\r\n      margin-top:0px !important;\r\n  }\r\n  /* ::ng-deep .mat-select-content{\r\n    width:120px !important;\r\n\r\n  }  */\r\n  .holds-the-iframe {\r\n    background:url('loader.gif') center center no-repeat;\r\n   }\r\n  ::ng-deep .grid_cell{\r\n    width: 330px !important;\r\n   }\r\n  ::ng-deep .gantt_grid_scale {\r\n    width: 329px !important;\r\n}\r\n  ::ng-deep .gantt_grid_data {\r\n  width: 100%;\r\n  overflow: auto;\r\n}\r\n  ::ng-deep .gantt_data_area {\r\n  position: relative;\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n  ::ng-deep .gantt_scale_cell{\r\n  text-transform: none !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiwwR0FBMEc7RUFDNUc7RUFDQTtJQUNFLHdDQUF3QztJQUN4QyxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QscUNBQXFDO0lBQ3JDLG1DQUFtQztFQUNyQztFQUNBO0FBQ0Ysa0JBQWtCO0VBQ2hCO0VBQ0E7TUFDSSx5QkFBeUI7RUFDN0I7RUFFQTs7O01BR0k7RUFDSjtJQUNFLG9EQUEyRDtHQUM1RDtFQUNBO0lBQ0MsdUJBQXVCO0dBQ3hCO0VBQ0E7SUFDQyx1QkFBdUI7QUFDM0I7RUFDQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCO0VBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7RUFDQTtFQUNFLCtCQUErQjtBQUNqQyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbWF0ZXJpYWxpY29ucy92NDEvZmxVaFJxNnR6WmNsUUVKLVZkZy1JdWlhRHNOYy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xyXG4gIH1cclxuICA6Om5nLWRlZXAgLm1hdGVyaWFsLWljb25zIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgd29yZC13cmFwOiBub3JtYWw7XHJcbiAgICBkaXJlY3Rpb246IGx0cjtcclxuICAgIC13ZWJraXQtZm9udC1mZWF0dXJlLXNldHRpbmdzOiAnbGlnYSc7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICB9XHJcbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZHtcclxucGFkZGluZy1yaWdodDozMHB4O1xyXG4gIH1cclxuICA6Om5nLWRlZXAgIC5jZGstb3ZlcmxheS1wYW5lLXNlbGVjdC1zZWFyY2h7XHJcbiAgICAgIG1hcmdpbi10b3A6MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAvKiA6Om5nLWRlZXAgLm1hdC1zZWxlY3QtY29udGVudHtcclxuICAgIHdpZHRoOjEyMHB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gIH0gICovXHJcbiAgLmhvbGRzLXRoZS1pZnJhbWUge1xyXG4gICAgYmFja2dyb3VuZDp1cmwoJ2Fzc2V0cy9sb2FkZXIuZ2lmJykgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XHJcbiAgIH1cclxuICAgOjpuZy1kZWVwIC5ncmlkX2NlbGx7XHJcbiAgICB3aWR0aDogMzMwcHggIWltcG9ydGFudDtcclxuICAgfVxyXG4gICA6Om5nLWRlZXAgLmdhbnR0X2dyaWRfc2NhbGUge1xyXG4gICAgd2lkdGg6IDMyOXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwIC5nYW50dF9ncmlkX2RhdGEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbjo6bmctZGVlcCAuZ2FudHRfZGF0YV9hcmVhIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG46Om5nLWRlZXAgLmdhbnR0X3NjYWxlX2NlbGx7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"width: 100%; height: 100%;overflow-x:scroll;overflow-y: auto\" class=\"md-body-1\">\r\n  <div class=\"md-padding\" layout-xs=\"column\" layout=\"row\" style=\"width: 100%; height: 100%; padding: 20px;\">\r\n    <div class=\"container\" id=\"\" style='width: 100%;'>\r\n\r\n      <div class=\"sidebyside\" style=\"margin-right: 75px;\">\r\n        <ul class=\"nav nav-tabs\" id=\"myTab\">\r\n          <li class=\"active\">\r\n            <a data-target=\"#gantt_view\" data-toggle=\"tab\" onclick=\"toggleView('program_consolidation_view',0);\">Program View</a>\r\n          </li>\r\n          <li>\r\n            <a data-target=\"#gantt_view\" data-toggle=\"tab\" onclick=\"toggleView('region_consolidation_view',0);\">Region View</a>\r\n          </li>\r\n          <li>\r\n            <a data-target=\"#gantt_view\" data-toggle=\"tab\" onclick=\"toggleView('resource_consolidation_view',0);\">Resource View</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div style=\"margin-top: 6px\" class=\"sidebyside  ui-inputtext\" id=\"gantt_selection_criteria\">\r\n        <form [formGroup]=\"searchGanttChart\" fxFlex fxLayout=\"column\" autocomplete=\"off\">\r\n        \r\n          <mat-form-field>\r\n            <mat-select name=\"selectedProgram\" placeholder=\"Select a Program\" formControlName=\"program\" multiple>\r\n              <ngx-mat-select-search placeholderLabel=\"Search\" noEntriesFoundLabel=\"No options found\" [formControl]=\"programFilterCtrl\"></ngx-mat-select-search>\r\n              <mat-option #allProgramSelected (click)=\"toggleAllSelection('program')\" [value]=\"0\">All</mat-option>\r\n              <mat-option *ngFor=\"let Program of listProgram\" [value]=\"Program.value\" (click)=\"togglePerOne('program')\">\r\n                {{Program.value}}\r\n              </mat-option>\r\n\r\n            </mat-select>\r\n          </mat-form-field>\r\n\r\n\r\n          <mat-form-field>\r\n            <mat-select name=\"selectedRegion\" placeholder=\"Select a Region\" formControlName=\"region\" multiple>\r\n              <ngx-mat-select-search placeholderLabel=\"Search\" noEntriesFoundLabel=\"No options found\" [formControl]=\"regionFilterCtrl\"></ngx-mat-select-search>\r\n              <mat-option #allregionSelected (click)=\"toggleAllSelection('region')\" [value]=\"0\">All</mat-option>\r\n              <mat-option *ngFor=\"let Region of listRegion\" [value]=\"Region.value\" (click)=\"togglePerOne('region')\">\r\n\r\n                {{Region.value}}\r\n\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field>\r\n            <mat-select name=\"selectedResource\" placeholder=\"Select a Resource\" formControlName=\"resource\" multiple>\r\n              <ngx-mat-select-search placeholderLabel=\"Search\" noEntriesFoundLabel=\"No options found\" [formControl]=\"resourceFilterCtrl\"></ngx-mat-select-search>\r\n              <mat-option #allresourceSelected (click)=\"toggleAllSelection('resource')\" [value]=\"0\">All</mat-option>\r\n              <mat-option *ngFor=\"let Resource of listResource\" [value]=\"Resource.value\" (click)=\"togglePerOne('resource')\">\r\n\r\n                {{Resource.value}}\r\n\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </form>\r\n      </div>\r\n\r\n      <div class=\"sidebyside\" ng-controller=\"myCtrl\" style=\"margin-top:9px;float:right\">\r\n        <div class=\"upload\" style=\"float:left;margin-right: 8px\">\r\n          <!-- <a class=\"download\" onclick=\"uploadSharePointFile();\"> -->\r\n              <a class=\"download\" (click)=\"uploadSharePointFile();\">\r\n                  \r\n            Refresh </a>\r\n        </div>\r\n         <div class=\"upload\" style=\"float:left;margin-right: 8px;display:none;\">\r\n          Upload\r\n          <input type=\"file\" class=\"hide_file\" onchange=\"handleFileSelect();\" file-model=\"myFile\" accept=\".xlsx\" style=\"display:inline;\"\r\n          />\r\n        </div> \r\n        <!-- <div class=\"upload\" style=\"float:left;margin-right: 8px\">\r\n          <a class=\"download\" href=\"http://35.188.173.90/ganttChart/CSV/Template/template.xlsx\">\r\n            Template </a>\r\n        </div> -->\r\n        <!-- <div class=\"upload\" style=\"float:left;margin-right: 8px\">\r\n            <a class=\"download\" href=\"http://35.188.173.90/ganttChart/CSV/CurrentFile/Global_IT_Roadmap.xlsx\">\r\n              Template </a>\r\n          </div> -->\r\n        <!-- <div class=\"upload\" style=\"float:right;\">\r\n          <a class=\"download\" onclick=\"showHistory();\"> History </a>\r\n        </div> -->\r\n\r\n      </div>\r\n      <!-- <div id=\"historyDiv\" class=\"historycontainer\">\r\n        <table id=\"historyTable\">\r\n\r\n        </table>\r\n      </div> -->\r\n    </div>\r\n    <div id=\"gantt_view\" style=\"height: 90%\" class=\"holds-the-iframe\">\r\n      <div id=\"gantt_here\" style='height: 100%; margin: 1px 0px 20px 0px;'>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var core_2 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var masterdata_service_1 = __webpack_require__(/*! ../app/_services/masterdata.service */ "./src/app/_services/masterdata.service.ts");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
// import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
var AppComponent = /** @class */ (function () {
    function AppComponent(fb, masterService) {
        this.fb = fb;
        this.masterService = masterService;
        this.title = 'ganttchart';
        this.programFilterCtrl = new forms_1.FormControl();
        this.regionFilterCtrl = new forms_1.FormControl();
        this.resourceFilterCtrl = new forms_1.FormControl();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getApiPath();
        this.searchGanttChart = this.fb.group({
            program: new forms_1.FormControl(''),
            region: new forms_1.FormControl(''),
            resource: new forms_1.FormControl('')
        });
        this.programFilterCtrl.valueChanges
            .subscribe(function () {
            _this.filterProgram();
        });
        this.regionFilterCtrl.valueChanges
            .subscribe(function () {
            _this.filterRegion();
        });
        this.resourceFilterCtrl.valueChanges
            .subscribe(function () {
            _this.filterResource();
        });
    };
    AppComponent.prototype.getApiPath = function () {
        var _this = this;
        var obj;
        this.masterService.getJSON().subscribe(function (data) {
            obj = data;
            localStorage.setItem('apiurl', obj.apiurl);
            localStorage.setItem('appurl', obj.appurl);
            _this.uploadSharePointFile();
            //this.getRoadMapData();
        }, function (error) { return console.log(error); });
    };
    AppComponent.prototype.togglePerOne = function (key) {
        if (key == 'region') {
            if (this.allregionSelected.selected) {
                this.allregionSelected.deselect();
                this.selectedRegion = this.searchGanttChart.controls.region.value;
                this.filterRoadmapData();
                return false;
            }
            if (this.searchGanttChart.controls.region.value.length == this.listRegion.length) {
                this.allregionSelected.select();
            }
            this.selectedRegion = this.searchGanttChart.controls.region.value;
        }
        else if (key == 'program') {
            if (this.allProgramSelected.selected) {
                this.allProgramSelected.deselect();
                this.selectedProgram = this.searchGanttChart.controls.program.value;
                this.filterRoadmapData();
                return false;
            }
            if (this.searchGanttChart.controls.program.value.length == this.listProgram.length) {
                this.allProgramSelected.select();
            }
            this.selectedProgram = this.searchGanttChart.controls.program.value;
        }
        else if (key == 'resource') {
            if (this.allresourceSelected.selected) {
                this.allresourceSelected.deselect();
                this.selectedResource = this.searchGanttChart.controls.resource.value;
                this.filterRoadmapData();
                return false;
            }
            if (this.searchGanttChart.controls.resource.value.length == this.listResource.length) {
                this.allresourceSelected.select();
            }
            this.selectedResource = this.searchGanttChart.controls.resource.value;
        }
        this.filterRoadmapData();
    };
    AppComponent.prototype.toggleAllSelection = function (key) {
        if (key == 'region') {
            if (this.allregionSelected.selected) {
                this.searchGanttChart.controls.region
                    .patchValue(this.listRegion.map(function (item) { return item.value; }).concat([0]));
            }
            else {
                this.searchGanttChart.controls.region.patchValue([]);
            }
            this.selectedRegion = this.searchGanttChart.controls.region.value;
        }
        else if (key == 'program') {
            if (this.allProgramSelected.selected) {
                this.searchGanttChart.controls.program
                    .patchValue(this.listProgram.map(function (item) { return item.value; }).concat([0]));
            }
            else {
                this.searchGanttChart.controls.program.patchValue([]);
            }
            this.selectedProgram = this.searchGanttChart.controls.program.value;
        }
        else if (key == 'resource') {
            if (this.allresourceSelected.selected) {
                this.searchGanttChart.controls.resource
                    .patchValue(this.listResource.map(function (item) { return item.value; }).concat([0]));
            }
            else {
                this.searchGanttChart.controls.resource.patchValue([]);
            }
            this.selectedResource = this.searchGanttChart.controls.resource.value;
        }
        this.filterRoadmapData();
        console.log(this.selectedProgram);
    };
    AppComponent.prototype.filterProgram = function () {
        var newlist;
        if (!this.listProgram) {
            return;
        }
        // get the search keyword
        var search = this.programFilterCtrl.value;
        if (!search) {
            this.listProgram = this.finallistProgram;
            return;
        }
        else {
            search = search.toLowerCase();
        }
        newlist =
            this.listProgram = this.finallistProgram.filter(function (item) { return item.label.toLowerCase().indexOf(search) > -1; });
    };
    AppComponent.prototype.filterRegion = function () {
        var newlist;
        if (!this.listRegion) {
            return;
        }
        // get the search keyword
        var search = this.regionFilterCtrl.value;
        if (!search) {
            this.listRegion = this.finallistRegion;
            return;
        }
        else {
            search = search.toLowerCase();
        }
        newlist =
            this.listRegion = this.finallistRegion.filter(function (item) { return item.label.toLowerCase().indexOf(search) > -1; });
    };
    AppComponent.prototype.filterResource = function () {
        var newlist;
        if (!this.listResource) {
            return;
        }
        // get the search keyword
        var search = this.resourceFilterCtrl.value;
        if (!search) {
            this.listResource = this.finallistResource;
            return;
        }
        else {
            search = search.toLowerCase();
        }
        newlist =
            this.listResource = this.finallistResource.filter(function (item) { return item.label.toLowerCase().indexOf(search) > -1; });
    };
    AppComponent.prototype.uploadSharePointFile = function () {
        var _this = this;
        this.masterService.uploadSharePointFile().subscribe(function (data) {
            _this.getRoadMapData();
        });
        (function (error) {
            console.error("Error updating status!");
        });
    };
    AppComponent.prototype.getRoadMapData = function () {
        var _this = this;
        this.masterService.getRoadMapData('Global_IT_Roadmap.xlsx').subscribe(function (data) {
            _this.listRoadMapData = data;
            getAllRoadMapData(_this.listRoadMapData, false);
            _this.excelColordata = _this.listRoadMapData[0].excelColordata;
            _this.excelRoadMapdata = _this.listRoadMapData[0].excelRoadMapdata;
            _this.bindDropDown();
        });
        (function (error) {
            console.error("Error updating status!");
        });
    };
    AppComponent.prototype.filterRoadmapData = function () {
        var _this = this;
        this.searchexcelRoadMapdata = this.excelRoadMapdata.filter(function (o1) { return _this.selectedProgram.some(function (o2) { return o2 == o1.program_name; }) &&
            _this.selectedRegion.some(function (o3) { return o3 == o1.region_name; }) &&
            _this.selectedResource.some(function (o4) { return o4 == o1.resource_name; }); });
        // onFilterDropDown(this.selectedProgram,this.selectedRegion,this.selectedResource);
        createGanttChart(this.searchexcelRoadMapdata, false);
    };
    AppComponent.prototype.bindDropDown = function () {
        var _this = this;
        this.listProgram = [];
        this.listRegion = [];
        this.listResource = [];
        var dupesprogram = [];
        var dupesregion = [];
        var dupesresource = [];
        var filteredList = this.excelRoadMapdata;
        for (var i = 0; i < filteredList.length; i++) {
            var rowData = filteredList[i];
            if (!dupesprogram[rowData.program_name]) {
                dupesprogram[rowData.program_name] = true;
                this.listProgram.push({
                    value: rowData.program_name,
                    label: rowData.program_name
                });
            }
            if (!dupesregion[rowData.region_name]) {
                dupesregion[rowData.region_name] = true;
                this.listRegion.push({
                    value: rowData.region_name,
                    label: rowData.region_name
                });
            }
            if (!dupesresource[rowData.resource_name]) {
                dupesresource[rowData.resource_name] = true;
                this.listResource.push({
                    value: rowData.resource_name,
                    label: rowData.resource_name
                });
            }
        }
        this.finallistProgram = this.listProgram;
        this.finallistRegion = this.listRegion;
        this.finallistResource = this.listResource;
        this.searchGanttChart.controls.program
            .patchValue(this.listProgram.map(function (item) { return item.value; }).concat([0]));
        this.searchGanttChart.controls.region
            .patchValue(this.listRegion.map(function (item) { return item.value; }).concat([0]));
        this.searchGanttChart.controls.resource
            .patchValue(this.listResource.map(function (item) { return item.value; }).concat([0]));
        this.selectedProgram = [];
        this.selectedRegion = [];
        this.selectedResource = [];
        this.listProgram.forEach(function (item) { return (_this.selectedProgram.push(item.value)); });
        this.listRegion.forEach(function (item) { return (_this.selectedRegion.push(item.value)); });
        this.listResource.forEach(function (item) { return (_this.selectedResource.push(item.value)); });
    };
    __decorate([
        core_1.ViewChild('allProgramSelected'),
        __metadata("design:type", material_1.MatOption)
    ], AppComponent.prototype, "allProgramSelected", void 0);
    __decorate([
        core_1.ViewChild('allregionSelected'),
        __metadata("design:type", material_1.MatOption)
    ], AppComponent.prototype, "allregionSelected", void 0);
    __decorate([
        core_1.ViewChild('allresourceSelected'),
        __metadata("design:type", material_1.MatOption)
    ], AppComponent.prototype, "allresourceSelected", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            providers: [masterdata_service_1.MasterService],
            encapsulation: core_2.ViewEncapsulation.Emulated,
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, masterdata_service_1.MasterService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var animations_1 = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var select_1 = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var ngx_mat_select_search_1 = __webpack_require__(/*! ngx-mat-select-search */ "./node_modules/ngx-mat-select-search/esm5/ngx-mat-select-search.js");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                select_1.MatSelectModule,
                animations_1.BrowserAnimationsModule,
                http_1.HttpClientModule,
                ngx_mat_select_search_1.NgxMatSelectSearchModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: true,
    apiurl: "http://35.188.173.90/ganttChart/api/CSV/",
    siteurl: "http://35.188.173.90/ganttChart/api/CSV/"
    // ,apiurl:"http://172.23.116.87/roadmapapi/api/CSV/",
    // siteurl:"http://172.23.116.87/roadmapapi/api/CSV/"
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\MA_Projects\gantt_chart\OTIS_GanttChart\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map