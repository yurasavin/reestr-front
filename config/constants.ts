// User roles
enum UserRole {
  Planning = 100,
  TenderSpecialist = 200,
  TenderSupervisor = 300,
}

const UserRoleDispalay: { [key in UserRole]: string } = {
  100: "Плановый отдел",
  200: "Закупщик",
  300: "Администратор",
} as const;

export { UserRole, UserRoleDispalay };
