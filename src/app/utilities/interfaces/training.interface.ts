import { ECategory } from '@utilities/enums/user.enum';

export interface ITrainingPortfolio {
    demo: ITrainingOutcome[];
}

export interface ITrainingOutcome {
    name: string;
    link: string;
    introduction: string;
}

export interface IStudent {
    uid: string;
    category: ECategory;
    salary: number;
    graduatedDate?: string;
}

export interface IStudentGroup {
    frontend: IStudent[];
    backend: IStudent[];
    java: IStudent[];
    unity: IStudent[];
    python: IStudent[];
}
