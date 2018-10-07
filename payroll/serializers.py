from rest_framework import serializers
'''from payroll.models import EmployeeModel
from django_cassandra_engine.rest.serializers import DjangoCassandraModelSerializer

class EmployeeSerializer(DjangoCassandraModelSerializer):
    class Meta:
        model=EmployeeModel
        fields=('employee_id','first_name','last_name','gender','age','salary')

class AccountSerializer(DjangoCassandraModelSerializer):
    class Meta:
        model=EmployeeModel
        fields=('username','password')'''

class Employee(object):
    def __init__(self,legacyempid,newempid,paygroup=None,payperiod=None,paydate=None,comparecodes=None,amount=None,hours=None,taxablewages=None,status=None):
        self.legacyempid=legacyempid;
        self.newempid=newempid
        self.paygroup=paygroup
        self.payperiod =payperiod
        self.paydate=paydate
        self.comparecodes =comparecodes
        self.hours =hours
        self.amount=amount
        self.taxablewages=taxablewages
        self.status=status

class EmployeeSeriaziers(serializers.Serializer):
        legacyempid=serializers.IntegerField()
        newempid=serializers.IntegerField()
        paygroup=serializers.CharField(allow_null=True)
        payperiod=serializers.IntegerField(allow_null=True)
        paydate=serializers.IntegerField(allow_null=True)
        comparecodes = serializers.CharField(allow_null=True)
        hours=serializers.CharField(allow_null=True)
        amount=serializers.CharField(allow_null=True)
        taxablewages=serializers.CharField(allow_null=True)
        status=serializers.CharField(allow_null=True)



