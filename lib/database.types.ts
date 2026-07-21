export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
  public: {
    Tables: {
      vehicles: {
        Row: {
          id: number;
          make: string;
          model: string;
          price: number;
          image_url: string;
        };
        Insert: {
          id?: number;
          make: string;
          model: string;
          price: number;
          image_url: string;
        };
        Update: {
          id?: number;
          make?: string;
          model?: string;
          price?: number;
          image_url?: string;
        };
      };
    };
    Views: {};
    Functions: {};
    Enums: {};
    CompositeTypes: {};
  };
}
