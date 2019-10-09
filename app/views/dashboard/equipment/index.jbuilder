json.array! @equipment do |el|
  json.id el[:id]
  json.title el[:title]
  json.kind el[:kind]
  json.serial_number el[:serial_number]
end
