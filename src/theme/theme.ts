export interface ITheme {
    c1: string;
    c2: string;
    c3: string;
    c4: string;
    t1: string;
    t2: string;
    t3: string;
    a1: string;
    a2: string;
    shadow: string;
  }
  
  export const themeLight: ITheme = {
    c1: "#f7f7f7",
    c2: "#dadada",
    c3: "#b8b8b8",
    c4: "#d0d0d0",
    t1: "#393939",
    t2: "#363636",
    t3: "#7e7e7e",
    a1: "#144cff",
    a2: "#4c77ff",
    shadow: "0px -5px 30px 0px rgba(67,67,67,0.74)"
  };
  
  export const themeDark: ITheme = {
    c1: "#141414",
    c2: "#2e2e2e",
    c3: "#666666",
    c4: "#212121",
    t1: "#d7d7d7",
    t2: "#c0c0c0",
    t3: "#969696",
    a1: "#144cff",
    a2: "#4c77ff",
    shadow: "0px -5px 30px 0px rgba(67,67,67,0.74)"
  };