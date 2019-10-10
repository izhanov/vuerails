json.equipment do
  json.id @equipment.id
  json.title @equipment.title
  json.kind @equipment.kind
  json.serial_number @equipment.serial_number
  json.organization_id @equipment.organization_id
end
