json.array! @clients do |client|
  json.id client[:id]
  json.full_name client[:full_name]
  json.phone client[:phone]
  json.email client[:email]
end
