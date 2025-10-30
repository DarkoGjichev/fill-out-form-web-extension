export default function transformUserData(user) {
  return {
    fullName: user.name,
    username: user.username,
    email: user.email,
    phone: user.phone,
    website: user.website,
    company: user.company?.name,
    address: user.address?.street,
    city: user.address?.city,
    postcode: user.address?.zipcode,
  };
}
