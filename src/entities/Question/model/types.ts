export interface Answer {
    id: string;
    text?: string;
    description?: [{title?: string, textDescription: string}];
    userLink?: string; 
    correct?: boolean;
    correctNumber?: number;
  }
  
  export interface Question {
    id: string;
    question: string;   
    answers: Answer[];   
    img?: string;        
  }