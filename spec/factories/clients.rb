FactoryBot.define do
  factory :client do
    sequence(:email) { |n| "client#{n}@gmail.com" }
    password { "qwerty" }
  end
end
