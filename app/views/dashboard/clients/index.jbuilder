json.array! @clients do |client|
  json.id client[:id]
  json.full_name client[:full_name]
end
