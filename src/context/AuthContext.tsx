import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { authApi, LoginRequest, LoginResponse } from "../api/savierApi";

type User = {
    email: string;
    // Add other user fields if available from JWT or user profile endpoint
};

type AuthContextType = {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    login: (data: LoginRequest) => Promise<void>;
    register: (data: unknown) => Promise<void>;
    registerAdmin: (data: unknown) => Promise<void>;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(localStorage.getItem("token"));

    useEffect(() => {
        if (token) {
            localStorage.setItem("token", token);
            // Here you might want to decode the token or fetch user profile
            // For now, we'll just assume specific user data isn't critical for simple display
            // or we can decode the JWT if needed.
            setUser({ email: "user@example.com" }); // Placeholder or decode from token
        } else {
            localStorage.removeItem("token");
            setUser(null);
        }
    }, [token]);

    const login = async (data: LoginRequest) => {
        const res = await authApi.login(data);
        if (res?.token) {
            setToken(res.token);
        }
    };

    const register = async (data: unknown) => {
        await authApi.register(data);
        // Optionally auto-login or redirect to login
    };

    const registerAdmin = async (data: unknown) => {
        await authApi.registerAdmin(data);
    };

    const logout = () => {
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ user, token, isAuthenticated: !!token, login, register, registerAdmin, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
