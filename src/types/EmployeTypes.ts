export interface Employee {
    name: string;
    email: string;
    position: string;
    department?: string;
    salary?: number;
}

export interface EmployeeOptionalProps {
    name?: string;
    email?: string;
    position?: string;
    department?: string;
    salary?: number;
}
