// 2. Record Mapping for Configuration
// Scenario: You are managing feature flags or permissions for specific user roles.
// Task: Define an enum Role { Admin, Editor, Guest }. Use the Record utility type to create a variable PermissionMap where every Role must be mapped to a boolean value. If a role is missing from the object, TypeScript should throw an error.

enum Role {
    Admin = "Admin",
    Editor = "Editor",
    Guest = "Guest"
}

const PermissionMap: Record<Role, boolean> = {
    Admin: true,
    Editor: true,
    Guest: false
}

console.log(PermissionMap);