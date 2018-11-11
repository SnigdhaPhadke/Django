import uuid
from cassandra.cqlengine import columns
from django_cassandra_engine.models import DjangoCassandraModel



class ClientData(DjangoCassandraModel):
    username = columns.Text()
    password = columns.Text()
    client_id=columns.Text(primary_key=True)
    company_name=columns.Text()
    company_id=columns.Integer()



class LegacyEmployeeData(DjangoCassandraModel):
    client_id = columns.Text(index=True)
    emp_id = columns.Integer()
    unique_id = columns.UUID(primary_key=True, default=uuid.uuid4)
    pay_group = columns.Text()
    emp_group1=columns.Text()
    country_code = columns.Text()

class NewEmployeeData(DjangoCassandraModel):
    client_id = columns.Text(index=True)
    emp_id = columns.Integer()
    unique_id = columns.UUID(primary_key=True, default=uuid.uuid4)
    pay_group = columns.Text()
    emp_group1 = columns.Text()
    country_code = columns.Text()

class LegacyEmployeePayData(DjangoCassandraModel):
    client_id = columns.Text(index=True)
    emp_id=columns.Integer(index=True)
    unique_id = columns.UUID(primary_key=True, default=uuid.uuid4)
    pay_group=columns.Text()
    pay_period=columns.Integer()
    pay_date=columns.Integer()
    pay_component=columns.Text(index=True)
    hours=columns.Integer()
    amount=columns.Double()
    taxable=columns.Double()
    country_code=columns.Text()

class NewEmployeePayData(DjangoCassandraModel):
    emp_id=columns.Integer(index=True)
    client_id = columns.Text(index=True)
    example_id = columns.UUID(primary_key=True, default=uuid.uuid4)
    pay_group=columns.Text()
    pay_period=columns.Integer()
    pay_date=columns.Integer()
    pay_component=columns.Text(index=True)
    hours=columns.Integer()
    amount=columns.Double()
    taxable=columns.Double()
    country_code=columns.Text()


class EmployeeMappingData(DjangoCassandraModel):
    client_id = columns.Text(index=True)
    unique_id = columns.UUID(primary_key=True, default=uuid.uuid4)
    legacy_employee_id=columns.Integer(index=True)
    new_employee_id=columns.Integer(index=True)
    country_code = columns.Text()

class LegacyPayComponentMappingData(DjangoCassandraModel):
    client_id = columns.Text(index=True)
    pay_component = columns.Text(index=True)
    unique_id = columns.UUID(primary_key=True, default=uuid.uuid4)
    compare_code=columns.Text()
    flip_amount_sign=columns.Text()
    hours_proration_factor=columns.Integer()
    amount=columns.Integer()
    taxable_wages_Proration_Factor=columns.Integer()
    country_code = columns.Text()


class NewPayComponentMappingData(DjangoCassandraModel):
    client_id = columns.Text(index=True)
    pay_component=columns.Text(index=True)
    unique_id = columns.UUID(primary_key=True, default=uuid.uuid4)
    compare_code = columns.Text()
    flip_amount_sign = columns.Text()
    hours_proration_factor = columns.Integer()
    amount = columns.Integer()
    taxable_wages_Proration_Factor = columns.Integer()
    country_code = columns.Text()
