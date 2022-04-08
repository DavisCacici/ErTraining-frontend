export interface Course {
  readonly id: number;
  readonly name: string;
  readonly state: string;
  readonly description: string;
}

export interface Role {
  readonly id: number;
  readonly name: string;
  readonly description: string;
}

export interface User {
  readonly id: number;
  readonly user_name: string;
  readonly email: string;
  readonly last_request?: Date;
  readonly role?: Role;
}
export interface Step {
  readonly step: string;
  readonly description: string;
}

export interface Progres {
  readonly step: Step;
  readonly state: string;
  readonly course_user_id: number;
}
