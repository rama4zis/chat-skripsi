export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      kelas: {
        Row: {
          class_code: string
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          class_code: string
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          class_code?: string
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      kelas_detail: {
        Row: {
          capacity: string
          class_code: string
          id: number
          mk_code: string
          schedule: string
        }
        Insert: {
          capacity: string
          class_code: string
          id?: never
          mk_code: string
          schedule: string
        }
        Update: {
          capacity?: string
          class_code?: string
          id?: never
          mk_code?: string
          schedule?: string
        }
        Relationships: [
          {
            foreignKeyName: "kelas_detail_class_code_fkey"
            columns: ["class_code"]
            isOneToOne: false
            referencedRelation: "kelas"
            referencedColumns: ["class_code"]
          },
          {
            foreignKeyName: "kelas_detail_mk_code_fkey"
            columns: ["mk_code"]
            isOneToOne: false
            referencedRelation: "matakuliah"
            referencedColumns: ["mk_code"]
          },
        ]
      }
      krs: {
        Row: {
          class_detail: number
          created_at: string | null
          grade: string | null
          id: number
          student_nim: string
          updated_at: string | null
        }
        Insert: {
          class_detail: number
          created_at?: string | null
          grade?: string | null
          id?: never
          student_nim: string
          updated_at?: string | null
        }
        Update: {
          class_detail?: number
          created_at?: string | null
          grade?: string | null
          id?: never
          student_nim?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "krs_class_detail_fkey"
            columns: ["class_detail"]
            isOneToOne: false
            referencedRelation: "kelas_detail"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "krs_student_nim_fkey"
            columns: ["student_nim"]
            isOneToOne: false
            referencedRelation: "mahasiswa"
            referencedColumns: ["nim"]
          },
        ]
      }
      mahasiswa: {
        Row: {
          address: string | null
          created_at: string | null
          email: string | null
          id: number
          name: string | null
          nim: string
          parent_phone: string | null
          phone: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          address?: string | null
          created_at?: string | null
          email?: string | null
          id?: never
          name?: string | null
          nim: string
          parent_phone?: string | null
          phone?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          address?: string | null
          created_at?: string | null
          email?: string | null
          id?: never
          name?: string | null
          nim?: string
          parent_phone?: string | null
          phone?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      matakuliah: {
        Row: {
          created_at: string | null
          kurikulum: string | null
          mk_code: string
          name: string | null
          semester: number | null
          sks: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          kurikulum?: string | null
          mk_code: string
          name?: string | null
          semester?: number | null
          sks?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          kurikulum?: string | null
          mk_code?: string
          name?: string | null
          semester?: number | null
          sks?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          created_at: string | null
          id: number
          name: string
          password: string
          phone: string
          updated_at: string | null
          username: string
        }
        Insert: {
          created_at?: string | null
          id?: never
          name: string
          password: string
          phone: string
          updated_at?: string | null
          username: string
        }
        Update: {
          created_at?: string | null
          id?: never
          name?: string
          password?: string
          phone?: string
          updated_at?: string | null
          username?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
