from django.shortcuts import render, get_object_or_404
import json
import pdb;
import numpy as np;
from django.contrib.sessions.backends.db import SessionStore
from django.http import HttpResponse
from rest_framework.renderers import JSONRenderer
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import Employee,EmployeeSeriaziers
from .models import EmployeeMappingData,LegacyPayComponentMappingData,NewPayComponentMappingData
from .models import LegacyEmployeePayData,NewEmployeePayData,ClientData,LegacyEmployeeData,NewEmployeeData
from django.http import HttpResponse
import pandas as pd
from django.views.decorators.csrf import csrf_exempt



session=SessionStore()


def index(request):
    return render(request,'payroll/index.html')

# view for implimenting Rest full API for authenticating users
@csrf_exempt
def authenticateuser(request):
        data = json.loads(request.body)
        username = data.get("username", None)
        password = data.get("password", None)
        try:
            clientdata=ClientData.objects.get(username=username,password=password)
        except ClientData.DoesNotExist:
            clientdata=None
        if(clientdata is not None):
            clientId = clientdata.client_id
            clientUsername=clientdata.username
            session["clientId"] = clientId
            response_data = {}
            response_data['STATUS'] = 'Success'
            response_data['CLIENTID'] = clientId
            response_data['MESSAGE'] = "Welcome "+ clientUsername
            return HttpResponse(
                json.dumps(response_data),
                content_type="application/json"
            )
        else:
            response_data = {}
            response_data['STATUS'] = 'Fail'
            response_data['MESSAGE'] = "Sorry " + username +" you don't have access for this site"
            return HttpResponse(
                json.dumps(response_data),
                content_type="application/json"
            )


# view for implimenting Rest full API for uploading legacy employee data
@csrf_exempt
def LegacyEmpData(request):
    if request.method=='POST':
        clientId=session["clientId"]
        files=request.FILES.getlist('file')
        for file in files:
            if file is not None:
                legacyemployeedata = LegacyEmployeeData.objects.all()
                for i in legacyemployeedata:
                    if i.client_id == clientId:
                        i.delete()
                    else:
                        continue
                df=pd.read_csv(file)
                for index, row in df.iterrows():
                    legacyemployeedata = LegacyEmployeeData(
                        client_id=clientId,
                        emp_id=row["*EMP_ID"],
                        additional_emp_id=row['EMP_ID_ADD1'],
                        pay_group=row['*PAY_GROUP'],
                        company_code=row['COMPANY_CODE'],
                        emp_group1=row['*EMP_GROUP1'],
                        emp_group2=row['EMP_GROUP2'],
                        emp_group3=row['EMP_GROUP3'],
                        emp_group4=row['EMP_GROUP4'],
                        country_code=row["*COUNTRY_CODE"]
                    )
                    legacyemployeedata.save();
            response_data = {}
            response_data['STATUS'] = 'Passed'
            response_data['MESSAGE'] = 'The File is Uploaded Successfully'
            return HttpResponse(
                json.dumps(response_data),
                content_type="application/json"
            )
        else:
            response_data = {}
            response_data['STATUS'] = 'Failure'
            response_data['MESSAGE'] = 'Failed to Upload the File'
            return HttpResponse(
                json.dumps(response_data),
                content_type="application/json"
            )
# view for implimenting Rest full API for uploading new employee data
@csrf_exempt
def NewEmpData(request):
    if request.method=='POST':
        clientId = session["clientId"]
        files=request.FILES.getlist('file')
        for file in files:
            if file is not None:
                newemployeedata = NewEmployeeData.objects.all()
                for i in newemployeedata:
                    if i.client_id == clientId:
                        i.delete()
                    else:
                        continue
                df=pd.read_csv(file)
                for index, row in df.iterrows():
                    newemployeedata = NewEmployeeData(
                        client_id=clientId,
                        emp_id=row["*EMP_ID"],
                        additional_emp_id=row['EMP_ID_ADD1'],
                        pay_group=row['*PAY_GROUP'],
                        company_code=row['COMPANY_CODE'],
                        emp_group1=row['*EMP_GROUP1'],
                        emp_group2=row['EMP_GROUP2'],
                        emp_group3=row['EMP_GROUP3'],
                        emp_group4=row['EMP_GROUP4'],
                        country_code=row["*COUNTRY_CODE"]
                    )
                    newemployeedata.save();
            response_data = {}
            response_data['STATUS'] = 'Passed'
            response_data['MESSAGE'] = 'The File is Uploaded Successfully'
            return HttpResponse(
                json.dumps(response_data),
                content_type="application/json"
            )
        else:
            response_data = {}
            response_data['STATUS'] = 'Failure'
            response_data['MESSAGE'] = 'Failed to Upload the File'
            return HttpResponse(
                json.dumps(response_data),
                content_type="application/json"
            )

# view for implimenting Rest full API for uploading legacy pay employee data
@csrf_exempt
def LegacyEmpPayData(request):
    if request.method=='POST':
        clientId = session["clientId"]
        files=request.FILES.getlist('file')
        for file in files:
            if file is not None:
                legacypaydata = LegacyEmployeePayData.objects.all()
                for i in legacypaydata:
                    if i.client_id == clientId:
                        i.delete()
                    else:
                        continue
                df=pd.read_csv(file)
                for index, row in df.iterrows():
                    legacypaydata = LegacyEmployeePayData(client_id=clientId,
                                                          emp_id=row["*EMP_ID"],
                                                          additional_emp_id=row['EMP_ID_ADD1'],
                                                          pay_group=row['*PAY_GROUP'],
                                                          pay_period=row["PAY_PERIOD"],
                                                          pay_date=row["*PAY_DATE"],
                                                          pay_component=row["*PAY_COMPONENT"].upper(),
                                                          tax_auth=row["TAX_AUTH"],
                                                          additional_pay_component=row["PAY_COMPONENT_ADD1"],
                                                          hours=row["HOURS"],
                                                          amount=row["AMOUNT"],
                                                          taxable=row["TAXABLE_WAGES"],
                                                          unit_of_measure=row["UNIT_OF_MEASURE"],
                                                          additional_compare=row["COMPARE_ADD1"],
                                                          country_code=row["*COUNTRY_CODE"]
                                              )

                    legacypaydata.save()
            response_data = {}
            response_data['STATUS'] = 'Passed'
            response_data['MESSAGE'] = 'The File is Uploaded Successfully'
            return HttpResponse(
                json.dumps(response_data),
                content_type="application/json"
            )
        else:
            response_data = {}
            response_data['STATUS'] = 'Failure'
            response_data['MESSAGE'] = 'Failed to Upload the File'
            return HttpResponse(
                json.dumps(response_data),
                content_type="application/json"
            )


# view for implimenting Rest full API for uploading new employee pay data
@csrf_exempt
def NewEmpPayData(request):
    if request.method=='POST':
        clientId = session["clientId"]
        files=request.FILES.getlist('file')
        for file in files:
            if file is not None:
                newpaydata = NewEmployeePayData.objects.all()
                for i in newpaydata:
                    if i.client_id == clientId:
                        i.delete()
                    else:
                        continue
                df=pd.read_csv(file)
                for index, row in df.iterrows():
                    newpaydata = NewEmployeePayData(client_id=clientId,
                                                    emp_id=row["*EMP_ID"],
                                                    additional_emp_id=row['EMP_ID_ADD1'],
                                                    pay_group=row['*PAY_GROUP'],
                                                    pay_period=row["PAY_PERIOD"],
                                                    pay_date=row["*PAY_DATE"],
                                                    pay_component=row["*PAY_COMPONENT"].upper(),
                                                    tax_auth=row["TAX_AUTH"],
                                                    additional_pay_component=row["PAY_COMPONENT_ADD1"],
                                                    hours=row["HOURS"],
                                                    amount=row["AMOUNT"],
                                                    taxable=row["TAXABLE_WAGES"],
                                                    unit_of_measure=row["UNIT_OF_MEASURE"],
                                                    additional_compare=row["COMPARE_ADD1"],
                                                    country_code=row["*COUNTRY_CODE"]
                                                    )

                    newpaydata.save()
            response_data = {}
            response_data['STATUS'] = 'Passed'
            response_data['MESSAGE'] = 'The File is Uploaded Successfully'
            return HttpResponse(
                json.dumps(response_data),
                content_type="application/json"
            )
        else:
            response_data = {}
            response_data['STATUS'] = 'Failure'
            response_data['MESSAGE'] = 'Failed to Upload the File'
            return HttpResponse(
                json.dumps(response_data),
                content_type="application/json"
            )

# view for implimenting Rest full API for uploading employee mapping data
@csrf_exempt
def EmpMappingData(request):
    if request.method=='POST':
        clientId = session["clientId"]
        files=request.FILES.getlist('file')
        for file in files:
            if file is not None:
                employeemappingdata = EmployeeMappingData.objects.all()
                for i in employeemappingdata:
                    if i.client_id == clientId:
                        i.delete()
                    else:
                        continue
                df=pd.read_csv(file)
                for index, row in df.iterrows():
                    employeemappingdata = EmployeeMappingData(client_id=clientId,
                                                              legacy_employee_id=row["*LEG_EMP_ID"],
                                                              additional_legacy_employee_id=row['LEG_EMP_ID_ADD1'],
                                                              new_employee_id=row['*NEW_EMP_ID'],
                                                              additional_new_employee_id=row["NEW_EMP_ID_ADD1"],
                                                              country_code=row["*COUNTRY_CODE"]
                                                              )

                    employeemappingdata.save()
            response_data = {}
            response_data['STATUS'] = 'Passed'
            response_data['MESSAGE'] = 'The File is Uploaded Successfully'
            return HttpResponse(
                json.dumps(response_data),
                content_type="application/json"
            )
        else:
            response_data = {}
            response_data['STATUS'] = 'Failure'
            response_data['MESSAGE'] = 'Failed to Upload the File'
            return HttpResponse(
                json.dumps(response_data),
                content_type="application/json"
            )

# view for implimenting Rest full API for uploading legacy pay component mapping data
@csrf_exempt
def LegacyPayComponentMapping(request):
    if request.method=='POST':
        clientId = session["clientId"]
        files=request.FILES.getlist('file')
        for file in files:
            if file is not None:
                legacypaycomponentmapping=LegacyPayComponentMappingData.objects.all()
                for i in legacypaycomponentmapping:
                    if i.client_id==clientId:
                        i.delete()
                    else:
                        continue
                df=pd.read_csv(file)
                for index, row in df.iterrows():
                    legacypaycomponentmapping = LegacyPayComponentMappingData(client_id=clientId,
                                                                              pay_component=row["*PAY_COMPONENT"].upper(),
                                                                              tax_auth=row["TAX_AUTH"],
                                                                              additional_pay_component=row["PAY_COMPONENT_ADD1"],
                                                                              compare_code=row["*COMPARE_CODE"].lower(),
                                                                              flip_amount_sign=row["*FLIP_AMOUNT_SIGN"],
                                                                              hours_proration_factor=row["*HOURS_PRORATION_FACTOR"],
                                                                              amount=row["*AMOUNT_PRORATION_FACTOR"],
                                                                              taxable_wages_Proration_Factor=row[
                                                                                  "*TAXABLE_WAGES_PRORATION_FACTOR"],
                                                                              country_code=row["*COUNTRY_CODE"]
                                                                              )

                    legacypaycomponentmapping.save()
            response_data = {}
            response_data['STATUS'] = 'Passed'
            response_data['MESSAGE'] = 'The File is Uploaded Successfully'
            return HttpResponse(
                json.dumps(response_data),
                content_type="application/json"
            )
        else:
            response_data = {}
            response_data['STATUS'] = 'Failure'
            response_data['MESSAGE'] = 'Failed to Upload the File'
            return HttpResponse(
                json.dumps(response_data),
                content_type="application/json"
            )


# view for implimenting Rest full API for uploading new pay component mapping data
@csrf_exempt
def NewPayComponentMapping(request):
    if request.method=='POST':
        clientId = session["clientId"]
        files=request.FILES.getlist('file')
        for file in files:
            if file is not None:
                newpaycomponentmapping = NewPayComponentMappingData.objects.all()
                for i in newpaycomponentmapping:
                    if i.client_id == clientId:
                        i.delete()
                    else:
                        continue
                df=pd.read_csv(file)
                for index, row in df.iterrows():
                    newpaycomponentmappingdata = NewPayComponentMappingData(
                        client_id=clientId,
                        pay_component=row["PAY_COMPONENT"].upper(),
                        tax_auth=row["TAX_AUTH"],
                        additional_pay_component=row["PAY_COMPONENT_ADD1"],
                        compare_code=row["COMPARE_CODE"].lower(),
                        flip_amount_sign=row["*FLIP_AMOUNT_SIGN"],
                        hours_proration_factor=row["*HOURS_PRORATION_FACTOR"],
                        amount=row["*AMOUNT_PRORATION_FACTOR"],
                        taxable_wages_Proration_Factor=row["*TAXABLE_WAGES_PRORATION_FACTOR"],
                        country_code=row["COUNTRY_CODE"]
                    )
                    newpaycomponentmappingdata.save();
            response_data = {}
            response_data['STATUS'] = 'Passed'
            response_data['MESSAGE'] = 'The File is Uploaded Successfully'
            return HttpResponse(
                json.dumps(response_data),
                content_type="application/json"
            )
        else:
            response_data = {}
            response_data['STATUS'] = 'Failure'
            response_data['MESSAGE'] = 'Failed to Upload the File'
            return HttpResponse(
                json.dumps(response_data),
                content_type="application/json"
            )





class Comparision(APIView):
    def get(self, request):
        clientId = session["clientId"]
        #clientId = 'compare67'
        employeemappingdata=EmployeeMappingData.objects(client_id=clientId)
        print("employee is",employeemappingdata.count())
        response_data = {}
        employeedatalist=[]
        for empmap in employeemappingdata:
            legacypaydata=LegacyEmployeePayData.objects(emp_id=empmap.legacy_employee_id,client_id=clientId)
            newpaydata=NewEmployeePayData.objects(emp_id=empmap.new_employee_id,client_id=clientId)
            legacyempid=empmap.legacy_employee_id
            newempid=empmap.new_employee_id
            comparecode = []
            amount = {}
            legacyhours={}
            legacytaxablewages={}
            newamount={}
            newhours={}
            newtaxablewages={}
            newcomparecodes=[]
            newuniquecomparecodes=[]
            for legpay in legacypaydata:
                paygroup=legpay.pay_group
                payperiod=legpay.pay_period
                paydate=legpay.pay_date
                legacypaycomponentmapping = LegacyPayComponentMappingData.objects(pay_component=legpay.pay_component,client_id=clientId)
                for i in legacypaycomponentmapping:
                    comparecode.append(i.compare_code)
                    uniquecomparecodes=[]
                    uniquecomparecodes=unique(comparecode)
            for k in uniquecomparecodes:
                amount[k]=0
                legacyhours[k]=0
                legacytaxablewages[k]=0
            for legpp in legacypaydata:
                legacypaycomponentmapping1 = LegacyPayComponentMappingData.objects(pay_component=legpp.pay_component,client_id=clientId)
                for h in legacypaycomponentmapping1:
                    amount[h.compare_code]=amount[h.compare_code]+legpp.amount
                    legacyhours[h.compare_code]=legacyhours[h.compare_code]+legpp.hours
                    legacytaxablewages[h.compare_code]=legacytaxablewages[h.compare_code]+legpp.taxable
            for newpay in newpaydata:
                newpaycomponentmapping=NewPayComponentMappingData.objects(pay_component=newpay.pay_component,client_id=clientId)
                for npc in newpaycomponentmapping:
                    newcomparecodes.append(npc.compare_code)
                    newuniquecomparecodes=[]
                    newuniquecomparecodes=unique(newcomparecodes)
            for n in newuniquecomparecodes:
                newamount[n] = 0
                newhours[n] = 0
                newtaxablewages[n] = 0
            for newpay1 in newpaydata:
                newpaycomponentmapping1=NewPayComponentMappingData.objects(pay_component=newpay1.pay_component,client_id=clientId)
                for npc1 in newpaycomponentmapping1:
                    newamount[npc1.compare_code] = newamount[npc1.compare_code] + newpay1.amount
                    newhours[npc1.compare_code] = newhours[npc1.compare_code] + newpay1.hours
                    newtaxablewages[npc1.compare_code] = newtaxablewages[npc1.compare_code] + newpay1.taxable
            #print("Legacy and New Emp id is", legacyempid,newempid)
            #print("amount is", amount)
            #print("Hours is", legacyhours)
            #print("Tax is", legacytaxablewages)
           # print("new amount is", newamount)
            #print("New Hours is", newhours)
            #print("Tax is", newtaxablewages)
            amountcomparision=comparedict(amount,newamount,newuniquecomparecodes)
            hourscomparision=comparedict(legacyhours,newhours,newuniquecomparecodes)
            taxablewagescomparision=comparedict(legacytaxablewages,newtaxablewages,newuniquecomparecodes)
            for i in newuniquecomparecodes:
                if(amountcomparision[i]==0 and taxablewagescomparision[i] == 0 and taxablewagescomparision[i] == 0):
                    status="Data Match"
                else:
                    status="Data Discrepancy"
                employeedata = Employee(legacyempid, newempid, paygroup, payperiod, paydate, i, amountcomparision[i],hourscomparision[i],taxablewagescomparision[i],status)
                employeeeserializer = EmployeeSeriaziers(employeedata)
                employeedatalist.append(employeeeserializer.data)
                response_data['ComparisionData'] = employeedatalist
        return Response(response_data)

def unique(list1):
    x = np.array(list1)
    return np.unique(x)

def comparedict(dict1,dict2,newuniquecomparecodes):
    res = {}
    for i in newuniquecomparecodes:
        res[i] = 0
    for i in dict1:
            if (dict1[i] == dict2[i]):
                continue
            elif (dict1[i] > dict2[i]):
                res[i] = dict2[i] - dict1[i]
                continue
            elif (dict1[i] < dict2[i]):
                res[i] = dict2[i] - dict1[i]
                continue
    return res


'''@csrf_exempt
def authenticateuser1(request):
    data = json.loads(request.body)
    username = data.get("username", None)
    password = data.get("password", None)
    clientdata = ClientData.objects.get(username=username, password=password)
    clientId = clientdata.client_id
    session["clientId"] = clientId
    if (clientdata is not None):
        response_data = {}
        response_data['role'] = 'ADMIN'
        response_data['status'] = 'OK'
        response_data['employeeId'] = clientId
        return HttpResponse(
            json.dumps(response_data),
            content_type="application/json"
        )


@csrf_exempt
def FileUploadView(request):
    print(request.body)
    if request.method=='POST':
        clientId='Deloitte89'
        print("clien id is",clientId)
        files=request.FILES.getlist('file')
        print(files)
        for f in files:
            print("file name is",f.name)
        for file in files:
            if file.name=="Legacy_Pay_Data_Template.csv":
                df=pd.read_csv(file)
                print("FILE NAME Is hello",file.name)
                for index, row in df.iterrows():
                    legacypaydata = LegacyEmployeePayData(client_id=clientId,
                                                          emp_id=row["*EMP_ID"],
                                                          additional_emp_id=row['EMP_ID_ADD1'],
                                                          pay_group=row['*PAY_GROUP'],
                                                          pay_period=row["PAY_PERIOD"],
                                                          pay_date=row["*PAY_DATE"],
                                                          pay_component=row["*PAY_COMPONENT"],
                                                          tax_auth=row["TAX_AUTH"],
                                                          additional_pay_component=row["PAY_COMPONENT_ADD1"],
                                                          hours=row["HOURS"],
                                                          amount=row["AMOUNT"],
                                                          taxable=row["TAXABLE_WAGES"],
                                                          unit_of_measure=row["UNIT_OF_MEASURE"],
                                                          additional_compare=row["COMPARE_ADD1"],
                                                          country_code=row["*COUNTRY_CODE"]
                                              )

                    legacypaydata.save()
            elif file.name=="New_Pay_Data_Template.csv":
                df = pd.read_csv(file)
                print("FILE NAME IS",file.name)
                for index, row in df.iterrows():
                    newpaydata = NewEmployeePayData(client_id=clientId,
                                                          emp_id=row["*EMP_ID"],
                                                          additional_emp_id=row['EMP_ID_ADD1'],
                                                          pay_group=row['*PAY_GROUP'],
                                                          pay_period=row["PAY_PERIOD"],
                                                          pay_date=row["*PAY_DATE"],
                                                          pay_component=row["*PAY_COMPONENT"],
                                                          tax_auth=row["TAX_AUTH"],
                                                          additional_pay_component=row["PAY_COMPONENT_ADD1"],
                                                          hours=row["HOURS"],
                                                          amount=row["AMOUNT"],
                                                          taxable=row["TAXABLE_WAGES"],
                                                          unit_of_measure=row["UNIT_OF_MEASURE"],
                                                          additional_compare=row["COMPARE_ADD1"],
                                                          country_code=row["*COUNTRY_CODE"]
                                                          )

                    newpaydata.save()
            elif file.name == "Legacy_Employee_Template.csv":
                df = pd.read_csv(file)
                print("FILE NAME IS", file.name)
                print(df.info)
                for index, row in df.iterrows():
                    legacyemployeedata=LegacyEmployeeData(
                    client_id = clientId,
                    emp_id = row["*EMP_ID"],
                    additional_emp_id = row['EMP_ID_ADD1'],
                    pay_group=row['*PAY_GROUP'],
                    company_code=row['COMPANY_CODE'],
                    emp_group1=row['*EMP_GROUP1'],
                    emp_group2=row['EMP_GROUP2'],
                    emp_group3=row['EMP_GROUP3'],
                    emp_group4=row['EMP_GROUP4'],
                    country_code=row["*COUNTRY_CODE"]
                    )
                    legacyemployeedata.save();

            elif file.name == "New_Employee_Template.csv":
                df = pd.read_csv(file)
                print("FILE NAME IS", file.name)
                for index, row in df.iterrows():
                    newemployeedata=NewEmployeeData(
                    client_id = clientId,
                    emp_id = row["*EMP_ID"],
                    additional_emp_id = row['EMP_ID_ADD1'],
                    pay_group=row['*PAY_GROUP'],
                    company_code=row['COMPANY_CODE'],
                    emp_group1=row['*EMP_GROUP1'],
                    emp_group2=row['EMP_GROUP2'],
                    emp_group3=row['EMP_GROUP3'],
                    emp_group4=row['EMP_GROUP4'],
                    country_code=row["*COUNTRY_CODE"]
                    )
                    if newemployeedata!=NewEmployeeData.objects.all():
                        newemployeedata.save();
            elif file.name=="Employee_Mapping_Template.csv":
                df=pd.read_csv(file)
                print("FILE NAME Is hello",file.name)
                for index, row in df.iterrows():
                    employeemappingdata = EmployeeMappingData(client_id=clientId,
                                                          legacy_employee_id=row["*LEG_EMP_ID"],
                                                          additional_legacy_employee_id=row['LEG_EMP_ID_ADD1'],
                                                          new_employee_id=row['*NEW_EMP_ID'],
                                                          additional_new_employee_id=row["NEW_EMP_ID_ADD1"],
                                                          country_code=row["*COUNTRY_CODE"]
                                              )

                    employeemappingdata.save()
            elif file.name=="Legacy_Pay_Component_Mapping_Template.csv":
                df = pd.read_csv(file)
                print("FILE NAME IS",file.name)
                for index, row in df.iterrows():
                    legacypaycomponentmapping = LegacyPayComponentMappingData(client_id=clientId,
                                                          pay_component=row["*PAY_COMPONENT"],
                                                          tax_auth=row["TAX_AUTH"],
                                                          additional_pay_component=row["PAY_COMPONENT_ADD1"],
                                                          compare_code=row["*COMPARE_CODE"],
                                                          flip_amount_sign=row["*FLIP_AMOUNT_SIGN"],
                                                          hours_proration_factor=row["*HOURS_PRORATION_FACTOR"],
                                                          amount=row["*AMOUNT_PRORATION_FACTOR"],
                                                          taxable_wages_Proration_Factor=row["*TAXABLE_WAGES_PRORATION_FACTOR"],
                                                          country_code=row["*COUNTRY_CODE"]
                                                          )

                    legacypaycomponentmapping.save()
            elif file.name == "New_Pay_Component_Mapping_Template.csv":
                df = pd.read_csv(file)
                print("FILE NAME IS", file.name)
                for index, row in df.iterrows():
                    newpaycomponentmappingdata=NewPayComponentMappingData(
                        client_id=clientId,
                        pay_component=row["PAY_COMPONENT"],
                        tax_auth=row["TAX_AUTH"],
                        additional_pay_component=row["PAY_COMPONENT_ADD1"],
                        compare_code=row["COMPARE_CODE"],
                        flip_amount_sign=row["*FLIP_AMOUNT_SIGN"],
                        hours_proration_factor=row["*HOURS_PRORATION_FACTOR"],
                        amount=row["*AMOUNT_PRORATION_FACTOR"],
                        taxable_wages_Proration_Factor=row["*TAXABLE_WAGES_PRORATION_FACTOR"],
                        country_code=row["COUNTRY_CODE"]
                    )
                    newpaycomponentmappingdata.save();

    response_data = {}
    response_data['role'] = 'EMPLOYEE'
    response_data['status'] = 'OK'
    response_data['employeeId'] = 123
    return HttpResponse(
        json.dumps(response_data),
        content_type="application/json"
    )'''





