1. Select * from Products as a
left join Suppliers as b on a.supplier_id = b.id
left join SupplierCities as c on b.id = c.supplier_id

2. Select * from Products as a
join Suppliers as b on a.supplier_id = b.id
left join SupplierCities as c on b.id = c.supplier_id

3. Select * from Products as a
join Suppliers as b on a.supplier_id = b.id
join SupplierCities as c on b.id = c.supplier_id