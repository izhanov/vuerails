FactoryBot.define do
  factory :staff do
    sequence(:email) { |n| "staff#{n}@gmail.com" }
    password { "qwerty" }
  end
end
