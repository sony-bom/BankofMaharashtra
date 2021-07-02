
import { AppConstants } from '../app.constants';

import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  toggle = true;
  status = 'Enable';
  finalObj: any = [];
  finalobj: any;
  childArr: any = [];
  childData: any = [];
  enableTable2: boolean;
  enableTable1: boolean;
  tabsEnable: boolean;
  showPopup: boolean;
  DOMSavingsObj: any = {};
  enableTable4: boolean;
  enableTable3: boolean;
  interestRatedAllLoansEnable: boolean;
  domSavingsDepositsEnable: boolean;
  domesticTermDepositsObj: any = {};
  domesticTermDepositsEnable: boolean;
  enableTable5: boolean;
  enableTable6: boolean;
  nriDepositsObj: any = {};
  NRIDepositsEnable: boolean;
  enableTable7: boolean;
  foreignCurrencyExpObj: any = {};
  foreignCurrencyExpCreditEnable: boolean;
  enableTable8: boolean;
  selected: any;
  popup: boolean;
  text: string;
  childDetails : any = {};
  jsonData:any=[];
  enableTable9: boolean;
  enableTable10: boolean;
  enableTable11: boolean;
  showPopup1: boolean;
  enableCollapse: boolean;
  first: boolean;
  second: boolean;
  third: boolean;
  fourth: boolean;
  fifth: boolean;
  comments: string;
  finalchildDetails: any=[];
  cDetails: any[];
  message: any;
  userName: string;
  closeTabs: boolean;
  imageEnable: boolean;
  constructor(
    private router: Router,
    private constants: AppConstants,
    private dashboardService:DashboardService
   
  ) { }



  ngOnInit() {
    this.userName= localStorage.getItem('dataSource')
  

    this.finalObj = {
      
        "Sheet1": [
          {
            "item": "I. Type of Credit(1+2+3+4+5)",
            "AmountOutstanding": "91102.93",
            "roimin": "00.25",
            "roimax": "34.56",
            "irrmin": "0.00",
            "irrmax": "0.00"
          },
          {
            "item": "Cash Credit",
            "AmountOutstanding": "30104.2",
            "roimin": "0.00",
            "roimax": "25.38",
            "irrmin": "0.00",
            "irrmax": "0.00",
            "child": [
              {
                "item": "Cash Credit",
                "AmountOutstanding": "50204.2",
                "roimin": "0.00",
                "roimax": "35.28",
                "irrmin": "0.00",
                "irrmax": "0.00"
              },
              {
                "item": "",
                "AmountOutstanding": "20103.2",
                "roimin": "0.00",
                "roimax": "15.38",
                "irrmin": "0.00",
                "irrmax": "0.00"
              },
              {
                "item": "",
                "AmountOutstanding": "31234.2",
                "roimin": "0.00",
                "roimax": "65.38",
                "irrmin": "0.00",
                "irrmax": "0.00"
              }
            ]
          },
          {
            "item": "Demand Loans",
            "AmountOutstanding": "12504.92",
            "roimin": "0.00",
            "roimax": "23.5",
            "irrmin": "0.00",
            "irrmax": "0.00",
            "child": [
              {
                "item": "Demand Loans",
                "AmountOutstanding": "13456.92",
                "roimin": "0.00",
                "roimax": "12.5",
                "irrmin": "0.00",
                "irrmax": "0.00"
              }
            ]
          },
          {
            "item": "Overdrafts",
            "AmountOutstanding": "930.76",
            "roimin": "0.00",
            "roimax": "17",
            "irrmin": "0.00",
            "irrmax": "0.00",
            "child": [
              {
                "item": "Overdrafts",
                "AmountOutstanding": "560.16",
                "roimin": "0.00",
                "roimax": "11",
                "irrmin": "0.00",
                "irrmax": "0.00"
              },
              {
                "item": "",
                "AmountOutstanding": "830.46",
                "roimin": "0.00",
                "roimax": "12",
                "irrmin": "0.00",
                "irrmax": "0.00"
              }
            ]
          },
          {
            "item": "Inland Bills financed and discounted",
            "AmountOutstanding": "560.19",
            "roimin": "0.00",
            "roimax": "9",
            "irrmin": "0.00",
            "irrmax": "0.00",
            "child": [
              {
                "item": "Inland Bills financed and discounted",
                "AmountOutstanding": "230.19",
                "roimin": "0.00",
                "roimax": "4",
                "irrmin": "0.00",
                "irrmax": "0.00"
              },
              {
                "item": "",
                "AmountOutstanding": "456.19",
                "roimin": "0.00",
                "roimax": "8",
                "irrmin": "0.00",
                "irrmax": "0.00"
              }
            ]
          },
          {
            "item": "Term Loans (5.1+5.2+5.3+5.4+5.5)",
            "AmountOutstanding": "47002.86",
            "roimin": "0.00",
            "roimax": "0.00",
            "irrmin": "0.00",
            "irrmax": "0.00",
            "child": [
              {
                "item": "Term Loans (5.1+5.2+5.3+5.4+5.5)",
                "AmountOutstanding": "34003.86",
                "roimin": "0.00",
                "roimax": "16.00",
                "irrmin": "7.00",
                "irrmax": "0.00"
              },
              {
                "item": "",
                "AmountOutstanding": "47002.86",
                "roimin": "0.00",
                "roimax": "12.00",
                "irrmin": "0.00",
                "irrmax": "6.00"
              }
            ]
          },
          {
            "item": "5.1 1 day to 180 days",
            "AmountOutstanding": "16.72",
            "roimin": "5",
            "roimax": "18",
            "irrmin": "0.00",
            "irrmax": "18",
            "child": [
              {
                "item": "5.1 1 day to 180 days",
                "AmountOutstanding": "12.52",
                "roimin": "6",
                "roimax": "11",
                "irrmin": "0.00",
                "irrmax": "15"
              },
              {
                "item": "",
                "AmountOutstanding": "11.13",
                "roimin": "7",
                "roimax": "28",
                "irrmin": "0.00",
                "irrmax": "14"
              }
            ]
          },
          {
            "item": "5.2 181 days to 1 year",
            "AmountOutstanding": "907.68",
            "roimin": "0.00",
            "roimax": "17.75",
            "irrmin": "18",
            "irrmax": "17.75",
            "child": [
              {
                "item": "5.2 181 days to 1 year",
                "AmountOutstanding": "206.12",
                "roimin": "0.00",
                "roimax": "12.76",
                "irrmin": "14",
                "irrmax": "16.15"
              },
              {
                "item": "",
                "AmountOutstanding": "256.68",
                "roimin": "0.00",
                "roimax": "13.74",
                "irrmin": "12",
                "irrmax": "12.65"
              }
            ]
          },
          {
            "item": "Gross Bank Credit",
            "AmountOutstanding": "90670.87",
            "roimin": "",
            "roimax": "",
            "irrmin": "",
            "irrmax": "",
            "child": [
              {
                "item": "Gross Bank Credit",
                "AmountOutstanding": "80678.87",
                "roimin": "22.67",
                "roimax": "0.00",
                "irrmin": "12.12",
                "irrmax": "0.00"
              },
              {
                "item": "",
                "AmountOutstanding": "20937.87",
                "roimin": "0.00",
                "roimax": "0.00",
                "irrmin": "0.00",
                "irrmax": "13.12"
              }
            ]
          },
          {
            "item": "Agriculture",
            "AmountOutstanding": "15055.62",
            "roimin": "",
            "roimax": "24.75",
            "irrmin": "",
            "irrmax": "24.75",
            "child": [
              {
                "item": "Agriculture",
                "AmountOutstanding": "14234.62",
                "roimin": "",
                "roimax": "12.75",
                "irrmin": "",
                "irrmax": "13.15"
              },
              {
                "item": "",
                "AmountOutstanding": "13123.12",
                "roimin": "",
                "roimax": "14.75",
                "irrmin": "",
                "irrmax": "34.15"
              }
            ]
          },
          {
            "item": "Industry (Large)",
            "AmountOutstanding": "31475.46",
            "roimin": "",
            "roimax": "23.65",
            "irrmin": "",
            "irrmax": "23.65",
            "child": [
              {
                "item": "Industry (Large)",
                "AmountOutstanding": "12345.46",
                "roimin": "",
                "roimax": "3.65",
                "irrmin": "",
                "irrmax": "23.15"
              },
              {
                "item": "",
                "AmountOutstanding": "12789.46",
                "roimin": "",
                "roimax": "28.25",
                "irrmin": "",
                "irrmax": "16.15"
              }
            ]
          }
        ]
      
    
    };
    
    this.DOMSavingsObj = {
      
        "DomSavingsDeposits": [
          {
            "AmountOutstanding": "13186.04",
            "Buckets": "Up to Rs. 1 Lakh",
            "InterestRate": "4.00",
            "Amo1ntOutstanding1": "13186.04",
            "min": "4",
            "max": "0",
            "child": [
              {
                "AmountOutstanding": "10663.22",
                "Buckets": "Up to Rs. 1 Lakh",
                "InterestRate": "4.00",
                "Amo1ntOutstanding1": "1066322",
                "min": "4",
                "max": "4.5"
              }
            ]
          },
          {
            "AmountOutstanding": "14603.04",
            "Buckets": "Between Rs. 1 lakh to Rs. 3 Lakhs",
            "InterestRate": "4.00",
            "Amo1ntOutstanding1": "123893",
            "min": "4",
            "max": "4.5",
            "child": [
              {
                "AmountOutstanding": "11456.04",
                "Buckets": "Between Rs. 1 lakh to Rs. 3 Lakhs",
                "InterestRate": "5.00",
                "Amo1ntOutstanding1": "123477",
                "min": "4",
                "max": "5.5"
              },
              {
                "AmountOutstanding": "15673.04",
                "Buckets": "Between Rs. 1 lakh to Rs. 3 Lakhs",
                "InterestRate": "5.00",
                "Amo1ntOutstanding1": "113456",
                "min": "4.5",
                "max": "4.5"
              }
            ]
          },
          {
            "AmountOutstanding": "5079.81",
            "Buckets": "Between Rs. 3 Lakhs to Rs. 5 Lakhs",
            "InterestRate": "",
            "Amo1ntOutstanding1": "5079.81",
            "min": "5",
            "max": "4.5",
            "child": [
              {
                "AmountOutstanding": "4067.81",
                "Buckets": "Between Rs. 3 Lakhs to Rs. 5 Lakhs",
                "InterestRate": "",
                "Amo1ntOutstanding1": "2387.81",
                "min": "5",
                "max": "4.5"
              },
              {
                "AmountOutstanding": "3078.81",
                "Buckets": "Between Rs. 3 Lakhs to Rs. 5 Lakhs",
                "InterestRate": "5",
                "Amo1ntOutstanding1": "1346.11",
                "min": "5",
                "max": "4.5"
              }
            ]
          },
          {
            "AmountOutstanding": "24588.36",
            "Buckets": "Above 5 Lakh",
            "InterestRate": "4",
            "Amo1ntOutstanding1": "24588.36",
            "min": "4",
            "max": "4.5",
            "child": [
              {
                "AmountOutstanding": "45688.36",
                "Buckets": "Above 5 Lakh",
                "InterestRate": "4",
                "Amo1ntOutstanding1": "34567.36",
                "min": "4",
                "max": "4.5"
              },
              {
                "AmountOutstanding": "33588.36",
                "Buckets": "Above 5 Lakh",
                "InterestRate": "4",
                "Amo1ntOutstanding1": "87588.36",
                "min": "4",
                "max": "4.5"
              }
            ]
          },
          {
            "AmountOutstanding": "0",
            "Buckets": "Weighted Average Savings Deposit Rate for saving deposits above Rs. 1 lakh",
            "InterestRate": "0",
            "Amo1ntOutstand,ing1": "0",
            "min": "4.5",
            "max": "0",
            "child": [
              {
                "AmountOutstanding": "0",
                "Buckets": "Weighted Average Savings Deposit Rate for saving deposits above Rs. 1 lakh",
                "InterestRate": "0",
                "Amo1ntOutstand,ing1": "0",
                "min": "5.5",
                "max": "0"
              },
              {
                "AmountOutstanding": "0",
                "Buckets": "Weighted Average Savings Deposit Rate for saving deposits above Rs. 1 lakh",
                "InterestRate": "0",
                "Amo1ntOutstand,ing1": "0",
                "min": "4.0",
                "max": "0"
              }
            ]
          }
        ]
      
    };
    
    this.domesticTermDepositsObj = {
      
        "DomesticTermDeposit": [
          {
            "DomesticTermDeposits": "7 days to 14 days",
            "lessAmountOutstanding": "82.95",
            "lessRateofInteres": "4.28",
            "aboveAmountOutstanding": "76.43",
            "aboveRateofInterest": "3.61",
            "child": [
              {
                "DomesticTermDeposits": "7 days to 14 days",
                "lessAmountOutstanding": "55.95",
                "lessRateofInterest": "3.18",
                "aboveAmountOutstanding": "76.43",
                "aboveRateofInterest": "2.61"
              }
            ]
          },
          {
            "DomesticTermDeposits": "15 days to 30 days",
            "lessAmountOutstanding": "154.74",
            "lessRateofInteres": "4.35",
            "aboveAmountOutstanding": "214.95",
            "aboveRateofInterest": "3.9",
            "child": [
              {
                "DomesticTermDeposits": "15 days to 30 days",
                "lessAmountOutstanding": "137.74",
                "lessRateofInteres": "4.35",
                "aboveAmountOutstanding": "214.95",
                "aboveRateofInterest": "3.9"
              }
            ]
          },
          {
            "DomesticTermDeposits": "31 days to 45 days",
            "lessAmountOutstanding": "90.57",
            "lessRateofInteres": "4.27",
            "aboveAmountOutstanding": "93.56",
            "aboveRateofInterest": "4.19",
            "child": [
              {
                "DomesticTermDeposits": "31 days to 45 days",
                "lessAmountOutstanding": "20.57",
                "lessRateofInteres": "4.57",
                "aboveAmountOutstanding": "63.56",
                "aboveRateofInterest": "7.19"
              }
            ]
          },
          {
            "DomesticTermDeposits": "46 days to 90 days",
            "lessAmountOutstanding": "463.83",
            "lessRateofInteres": "5.26",
            "aboveAmountOutstanding": "76.58",
            "aboveRateofInterest": "4.19",
            "child": [
              {
                "DomesticTermDeposits": "46 days to 90 days",
                "lessAmountOutstanding": "463.83",
                "lessRateofInteres": "6.26",
                "aboveAmountOutstanding": "56.58",
                "aboveRateofInterest": "5.79"
              }
            ]
          },
          {
            "DomesticTermDeposits": "91 days to 180 days",
            "lessAmountOutstanding": "2008.26",
            "lessRateofInteres": "6.16",
            "aboveAmountOutstanding": "1041.75",
            "aboveRateofInterest": "4.4",
            "child": [
              {
                "DomesticTermDeposits": "91 days to 180 days",
                "lessAmountOutstanding": "4006.26",
                "lessRateofInteres": "6.16",
                "aboveAmountOutstanding": "989.75",
                "aboveRateofInterest": "4.5"
              }
            ]
          },
          {
            "DomesticTermDeposits": "181 days to 364 days",
            "lessAmountOutstanding": "2569.92",
            "lessRateofInteres": "6.13",
            "aboveAmountOutstanding": "2569.92",
            "aboveRateofInterest": "6.13",
            "child": [
              {
                "DomesticTermDeposits": "181 days to 364 days",
                "lessAmountOutstanding": "3456.92",
                "lessRateofInteres": "6.33",
                "aboveAmountOutstanding": "1546.92",
                "aboveRateofInterest": "7.13"
              }
            ]
          },
          {
            "DomesticTermDeposits": "1 year to less than 2 years",
            "lessAmountOutstanding": "42833.7",
            "lessRateofInteres": "6.71",
            "aboveAmountOutstanding": "1853.53",
            "aboveRateofInterest": "4.83",
            "child": [
              {
                "DomesticTermDeposits": "1 year to less than 2 years",
                "lessAmountOutstanding": "34567.7",
                "lessRateofInteres": "6.71",
                "aboveAmountOutstanding": "1767.53",
                "aboveRateofInterest": "3.83"
              }
            ]
          },
          {
            "DomesticTermDeposits": "2 year to less than 3 years",
            "lessAmountOutstanding": "6825.36",
            "lessRateofInteres": "7",
            "aboveAmountOutstanding": "236.21",
            "aboveRateofInterest": "5.74",
            "child": [
              {
                "DomesticTermDeposits": "2 year to less than 3 years",
                "lessAmountOutstanding": "5678.36",
                "lessRateofInteres": "7",
                "aboveAmountOutstanding": "536.21",
                "aboveRateofInterest": "6.74"
              }
            ]
          },
          {
            "DomesticTermDeposits": "3 year to less than 5 years",
            "lessAmountOutstanding": "8506.06",
            "lessRateofInteres": "6.75",
            "aboveAmountOutstanding": "284.69",
            "aboveRateofInterest": "4.82",
            "child": [
              {
                "lessAmountOutstanding": "6706.06",
                "lessRateofInteres": "7.75",
                "aboveAmountOutstanding": "284.69",
                "aboveRateofInterest": "4.12"
              }
            ]
          },
          {
            "DomesticTermDeposits": "5 year to less than 8 years",
            "lessAmountOutstanding": "1234.76",
            "lessRateofInteres": "7.61",
            "aboveAmountOutstanding": "34.51",
            "aboveRateofInterest": "7.32",
            "child": [
              {
                "DomesticTermDeposits": "5 year to less than 8 years",
                "lessAmountOutstanding": "3775.76",
                "lessRateofInteres": "7.61",
                "aboveAmountOutstanding": "23.51",
                "aboveRateofInterest": "8.32"
              }
            ]
          },
          {
            "DomesticTermDeposits": "8 year to 10 years",
            "lessAmountOutstanding": "1591.76",
            "lessRateofInteres": "8.27",
            "aboveAmountOutstanding": "45.22",
            "aboveRateofInterest": "7.51",
            "child": [
              {
                "DomesticTermDeposits": "8 year to 10 years",
                "lessAmountOutstanding": "2347.76",
                "lessRateofInteres": "8.27",
                "aboveAmountOutstanding": "67.22",
                "aboveRateofInterest": "9.51"
              }
            ]
          }
        ]
      
    };
    this.nriDepositsObj = {
      "NRIDeposits": [
        {
          "Items": "I. NRE Deposits"
        },
        {
          "Items": "(i) Current Deposits",
          "AmountOutstanding": "129.49",
          "EffectiveDateRateofInterest": "0"
        },
        {
          "Items": "(ii) Savings Deposit",
          "AmountOutstanding": "439.67",
          "EffectiveDateRateofInterest": "4"
        },
        {
          "Items": "(iii) Term Deposits",
          "AmountOutstanding": "662.44"
        },
        {
          "Items": "1 year to less than 2 years",
          "AmountOutstanding": "374.2",
          "EffectiveDateRateofInterest": "6.48"
        },
        {
          "Items": "2 years to less than 3 years",
          "AmountOutstanding": "87.02",
          "EffectiveDateRateofInterest": "6.41"
        },
        {
          "Items": "3 years and above",
          "AmountOutstanding": "201.22",
          "EffectiveDateRateofInterest": "7.4"
        },
        {
          "Items": "II. FCNR(B)"
        },
        {
          "Items": "Term Deposits"
        },
        {
          "Items": "1 year to less than 2 years",
          "USD": "10.58",
          "GBP": "0.51",
          "AUD": "5.46",
          "CAD": "0.03",
          "EUR": "0.91",
          "InterestRate": "2.58"
        },
        {
          "Items": "2 years to less than 3 years",
          "USD": "1.21",
          "GBP": "0.08",
          "AUD": "0",
          "CAD": "0",
          "EUR": "0",
          "InterestRate": "2.74"
        },
        {
          "Items": "3 years and above",
          "USD": "30.73",
          "GBP": "1.26",
          "AUD": "1.55",
          "CAD": "0.14",
          "EUR": "0.59",
          "InterestRate": "4.2"
        }
      ]
    };
    this.foreignCurrencyExpObj = {
      "ForeignCurrencyExpCredit": [
        {
          "Items": "I. Pre-shipment Credit (i+ii+iii)"
        },
        {
          "Items": "(i) Up to 180 days"
        },
        {
          "Items": "(ii) 181 days to 270 days"
        },
        {
          "Items": "(iii) Beyond 270 days"
        },
        {
          "Items": "II. Post-shipment Credit (a+b)"
        },
        {
          "Items": "(a) On Demand Bills for transit period (as specified by FEDAI)",
          "USD": "0",
          "GBP": "0",
          "MAX": "0",
          "CAD": "0",
          "EUR": "0",
          "InterestRate": "0"
        },
        {
          "Items": "(b) Usance Bills (i+ii+iii)",
          "USD": "0",
          "GBP": "0",
          "MAX": "0",
          "CAD": "0",
          "EUR": "0",
          "InterestRate": "0"
        },
        {
          "Items": "(i) Up to 90 days",
          "USD": "0",
          "GBP": "0",
          "MAX": "0",
          "CAD": "0",
          "EUR": "0",
          "InterestRate": "0"
        },
        {
          "Items": "(ii) 91 days to 180 days",
          "USD": "0",
          "GBP": "0",
          "MAX": "0",
          "CAD": "0",
          "EUR": "0",
          "InterestRate": "0"
        },
        {
          "Items": "(iii) Beyond 180 days",
          "USD": "0",
          "GBP": "0",
          "MAX": "0",
          "CAD": "0",
          "EUR": "0",
          "InterestRate": "0"
        }
      ]
    }
    this.childDetails  = {
      "Sheet1": [
          {
              "cust_id": "712176505",
              "item": "Cash Credit",
              "amount": "4016.08",
              "Key1": "1."
          },
          {
              "cust_id": "9100567326",
              "item": "Cash Credit",
              "amount": "9530.29",
              "Key1": "1."
          },
          {
              "cust_id": "9859516374",
              "item": "Cash Credit",
              "amount": "8384.04",
              "Key1": "1."
          },
          {
              "cust_id": "1507389966",
              "item": "Cash Credit",
              "amount": "4568.16",
              "Key1": "1."
          },
          {
              "cust_id": "2180569624",
              "item": "Cash Credit",
              "amount": "3605.70",
              "Key1": "1."
          },
          {
              "cust_id": "1243022678",
              "item": "Demand Loans",
              "amount": "2500.984",
              "Key1": "2."
          },
          {
              "cust_id": "5879481453",
              "item": "Demand Loans",
              "amount": "2500.984",
              "Key1": "2."
          },
          {
              "cust_id": "6725082798",
              "item": "Demand Loans",
              "amount": "2500.984",
              "Key1": "2."
          },
          {
              "cust_id": "7942631500",
              "item": "Demand Loans",
              "amount": "2500.984",
              "Key1": "2."
          },
          {
              "cust_id": "3922169138",
              "item": "Demand Loans",
              "amount": "2500.984",
              "Key1": "2."
          },
          {
              "cust_id": "5621755968",
              "item": "Overdrafts",
              "amount": "186.15",
              "Key1": "3."
          },
          {
              "cust_id": "7970392191",
              "item": "Overdrafts",
              "amount": "186.15",
              "Key1": "3."
          },
          {
              "cust_id": "4409228734",
              "item": "Overdrafts",
              "amount": "186.15",
              "Key1": "3."
          },
          {
              "cust_id": "4007620641",
              "item": "Overdrafts",
              "amount": "186.15",
              "Key1": "3."
          },
          {
              "cust_id": "9744941255",
              "item": "Overdrafts",
              "amount": "186.15",
              "Key1": "3."
          },
          {
              "cust_id": "9419770705",
              "item": "Inland Bills financed and discounted",
              "amount": "112.04",
              "Key1": "4."
          },
          {
              "cust_id": "672293809",
              "item": "Inland Bills financed and discounted",
              "amount": "112.04",
              "Key1": "4."
          },
          {
              "cust_id": "3500399403",
              "item": "Inland Bills financed and discounted",
              "amount": "112.04",
              "Key1": "4."
          },
          {
              "cust_id": "1981915386",
              "item": "Inland Bills financed and discounted",
              "amount": "112.04",
              "Key1": "4."
          },
          {
              "cust_id": "7515919056",
              "item": "Inland Bills financed and discounted",
              "amount": "112.04",
              "Key1": "4."
          },
          {
              "cust_id": "7612300392",
              "item": "5.1 1 day to 180 days",
              "amount": "3.34",
              "Key1": "5.1"
          },
          {
              "cust_id": "6733349503",
              "item": "5.1 1 day to 180 days",
              "amount": "3.34",
              "Key1": "5.1"
          },
          {
              "cust_id": "6607661959",
              "item": "5.1 1 day to 180 days",
              "amount": "3.34",
              "Key1": "5.1"
          },
          {
              "cust_id": "8945531217",
              "item": "5.1 1 day to 180 days",
              "amount": "3.34",
              "Key1": "5.1"
          },
          {
              "cust_id": "37519954",
              "item": "5.1 1 day to 180 days",
              "amount": "3.34",
              "Key1": "5.1"
          },
       
      ]
  }


  
  }


  closePopup() {
    this.popup = false;
    this.interestRatedAllLoansEnable = true;
    this.enableTable1 = true;
    this.enableTable2 = false;
    this.domSavingsDepositsEnable = false;
    this.domesticTermDepositsEnable = false;
    this.NRIDepositsEnable = false;
    this.foreignCurrencyExpCreditEnable = false;
  }

  getItems(item) {
    this.childData = item.child;
    if (this.childData) {
      this.enableTable2 = true;
      this.enableTable1 = false;
      this.enableTable9 = false;
      this.popup = true
    }

  }
  
  getchildDetails(childData){
this.enableTable9 = true;
this.enableTable10=true;
this.enableTable4 = false;
this.enableTable3 = false;
this.enableTable2 = false;
this.enableTable1 = false;
this.enableTable11 = true;
this.enableTable6 = false;
this.enableTable5 = false;
this.enableTable11 = true;

  }
  
  getDomSavingsItems(item) {
    this.childData = item.child;
    if (this.childData) {
      this.enableTable4 = true;
      this.enableTable3 = false;
      this.enableTable10=false;

    }
  }
  getDomesticTermItems(item) {
    this.childData = item.child;
    if (this.childData) {
      this.enableTable6 = true;
      this.enableTable5 = false;
      this.enableTable11=false;
      

    }
  }
  tabsBtn() {
    this.tabsEnable = true;
    this.closeTabs=true
    this.interestRatedAllLoansEnable = false;
    this.domSavingsDepositsEnable = false;
    this.domesticTermDepositsEnable = false;
    this.NRIDepositsEnable = false;
    this.foreignCurrencyExpCreditEnable = false;
     this.imageEnable =false; 
  }
  interestRatedAllLoans() {
    this.first=true;
    this.interestRatedAllLoansEnable = true
    this.enableTable1 = true;
    this.enableTable2 = false;
    this.domSavingsDepositsEnable = false;
    this.domesticTermDepositsEnable = false;
    this.NRIDepositsEnable = false;
    this.foreignCurrencyExpCreditEnable = false;
    this.enableTable10=false;
    this.enableTable11 = false;
  }
  domSavingsDeposits() {
    this.second=true;
    this.domSavingsDepositsEnable = true;
    this.enableTable3 = true;
    this.enableTable4 = false;
    this.interestRatedAllLoansEnable = false;
    this.domesticTermDepositsEnable = false;
    this.NRIDepositsEnable = false;
    this.foreignCurrencyExpCreditEnable = false;
    this.enableTable10=false;
    this.enableTable9=false;
    this.enableTable11 = false;
  }
  domesticTermDeposits() {
    this.third=true;
    this.domesticTermDepositsEnable = true;
    this.enableTable5 = true;
    this.enableTable6 = false;
    this.interestRatedAllLoansEnable = false;
    this.domSavingsDepositsEnable = false;
    this.NRIDepositsEnable = false;
    this.enableTable10=false;
    this.enableTable9=false;
    this.foreignCurrencyExpCreditEnable = false;
    this.enableTable11 = false;
  }
  NRIDeposits() {
    this.fourth=true;
    this.NRIDepositsEnable = true;
    this.enableTable7 = true;
    this.interestRatedAllLoansEnable = false;
    this.domSavingsDepositsEnable = false;
    this.domesticTermDepositsEnable = false;
    this.foreignCurrencyExpCreditEnable = false;
    this.enableTable10=false;
    this.enableTable9=false;
    this.enableTable11 = false;
  }
  ForeignCurrencyExpCreditEnable() {
    this.fifth=true;
    this.foreignCurrencyExpCreditEnable = true;
    this.enableTable8 = true;
    this.interestRatedAllLoansEnable = false;
    this.domSavingsDepositsEnable = false;
    this.domesticTermDepositsEnable = false;
    this.NRIDepositsEnable = false;
    this.enableTable9=false;
    this.enableTable10=false;
  }
  approved() {
    this.showPopup = true;
    this.showPopup1 = false;
    this.text ="Report “RBI207_Special Fortnightly Return-VI-AB” is Verified and Approved. Final Approval is sent to “Regional Manager”."
  }
  rejected() {
    this.showPopup = false;
    this.showPopup1 = true;
    this.text ="Report “RBI207_Special Fortnightly Return-VI-AB” has been rejected. Please fill in the Valid Reason for Rejection in the Comments section for further process.";
  }
  bakToBankDetails() {
    this.interestRatedAllLoansEnable = false;
    this.domSavingsDepositsEnable = false;
    this.domesticTermDepositsEnable = false;
    this.NRIDepositsEnable = false;
    this.foreignCurrencyExpCreditEnable = false;
    this.tabsEnable = false;
    this.enableCollapse=true;
    this.closeTabs=false;
     this.imageEnable =true; 
  }
  closeModal(){
    this.interestRatedAllLoansEnable = false;
    this.domSavingsDepositsEnable = false;
    this.domesticTermDepositsEnable = false;
    this.NRIDepositsEnable = false;
    this.foreignCurrencyExpCreditEnable = false;
    this.tabsEnable = true;
    this.showPopup1=false;
  }
  closeModal1(){
    this.interestRatedAllLoansEnable = false;
    this.domSavingsDepositsEnable = false;
    this.domesticTermDepositsEnable = false;
    this.NRIDepositsEnable = false;
    this.foreignCurrencyExpCreditEnable = false;
    this.tabsEnable = true;
    this.comments='';
    this.showPopup1=false;
  }

  enableDisableRule(job) {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
  }
  isActive(val) {
    return this.selected === val;
  }



  download(){
    this.dashboardService.downloadFile(this.jsonData, 'jsontocsv');
  }


  getItemsForDetails(data){
this.cDetails=[];
for(let i=0;i<=this.childDetails.Sheet1.length;i++){
  if(this.childDetails.Sheet1[i].item === data.item){

this.cDetails.push(this.childDetails.Sheet1[i]);
console.log(this.cDetails)
this.enableTable9 = true;
this.enableTable10=true;
this.enableTable4 = false;
this.enableTable3 = false;
this.enableTable2 = false;
this.enableTable1 = false;
this.enableTable11 = true;
this.enableTable6 = false;
this.enableTable5 = false;
this.enableTable11 = true;
  }

}

  }



  test() {
    const a = document.createElement('a');
    document.body.appendChild(a);
    const blob = new Blob(['Test String'], { type: 'application/rtf' }),
      url = window.URL.createObjectURL(blob);
    console.log(navigator);
    if (
      navigator.appVersion.toString().indexOf('.NET') > 0 &&
      window.navigator.msSaveBlob
    ) {
      console.log('from Explorer', window.navigator);
      let val = window.navigator.msSaveBlob(blob, 'UnitDetails' + '.rtf');
      console.log(val);
    } else {
      a.href = url;
      a.download = 'UnitDetails' + '.rtf';
      a.click();
      window.URL.revokeObjectURL(url);
    }
  }

  logout(){
    
    this.router.navigate(['/login']);
  }

  


}
