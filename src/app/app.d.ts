export interface IState {
  user_data: {
    id: string
    name: string
    email: string
    password: string
    slug: string
  } | undefined
  user_subjects: {
    id: string
    user_id: string
    name: string
    grade: number | null;
    total: number | null;
    slug: string;  
    components: string[]
  }[] | undefined
  current_subject: {
    id: string
    user_id: string
    name: string
    grade: number | null;
    total: number | null;
    slug: string;  
    components: string[]
  } | undefined
}

interface ISubject {
  subject: {
    id: string
    user_id: string
    name: string
    grade: number | null;
    total: number | null;
    slug: string;  
    components: string[]
  } | undefined
}