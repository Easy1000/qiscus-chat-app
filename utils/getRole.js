export default function getRole(role) {
  switch (role) {
    case 0:
      return "Admin";
    case 1:
      return "Agent";
    case 2:
      return "Customer";
    default:
      return "Unknown";
  }
}
