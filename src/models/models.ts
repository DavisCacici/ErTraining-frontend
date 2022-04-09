export interface Course {
  readonly id: number;
  readonly name: string;
  readonly state: string;
  readonly description: string;
}

export interface User {
  readonly id: number;
  readonly user_name: string;
  readonly email: string;
  readonly role: string;
}

export interface Progress {
  readonly id: number;
  readonly step: string;
  readonly state: string;
  readonly course: Course;
  readonly user: User;
}
