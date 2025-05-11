
import React, { useEffect, useState } from 'react';
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow 
} from "@/components/ui/table";

interface Plan {
  id: string;
  name: string;
  price: number;
  status: 'active' | 'cancelled';
  nextPayment: string;
}

interface AuthStatus {
  authenticated: boolean;
  user?: {
    id: string;
    fullname: string;
  };
  plans?: Plan[];
}

export default function ClientAreaPage() {
  const [, setLocation] = useLocation();
  const [authStatus, setAuthStatus] = useState<AuthStatus>({ authenticated: false });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const credentials = localStorage.getItem('credentials');
      if (!credentials) {
        setLocation('/auth');
        return;
      }

      const response = await fetch('/api/auth/status', {
        headers: {
          'Authorization': `Basic ${credentials}`
        }
      });
      const data = await response.json();
      
      if (data.authenticated) {
        setAuthStatus(data);
      } else {
        localStorage.removeItem('credentials');
        setLocation('/auth');
      }
    } catch (error) {
      console.error('Error:', error);
      localStorage.removeItem('credentials');
      setLocation('/auth');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    // Clear any auth state
    setLocation('/auth');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!authStatus.authenticated) {
    return null;
  }

  const activePlans = authStatus.plans?.filter(plan => plan.status === 'ativo') || [];
  const cancelledPlans = authStatus.plans?.filter(plan => plan.status === 'inativo') || [];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Dashboard</h1>
          <div className="flex gap-4 items-center">
            <span className="text-gray-600">Bem-vindo, {authStatus.user?.fullname}</span>
            <Button onClick={handleLogout} variant="outline">
              Sair
            </Button>
          </div>
        </div>

        <div className="grid gap-6">
          {/* Active Plans */}
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Planos Ativos</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Plano</TableHead>
                  <TableHead>Preço</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Próximo Pagamento</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {activePlans.map((plan) => (
                  <TableRow key={plan.id}>
                    <TableCell className="font-medium">{plan.name || '-'}</TableCell>
                    <TableCell>R$ {plan.price ? Number(plan.price).toFixed(2) : '0.00'}</TableCell>
                    <TableCell>
                      <span className="px-2 py-1 rounded text-sm bg-green-100 text-green-800">
                        Ativo
                      </span>
                    </TableCell>
                    <TableCell>{plan.nextPayment ? new Date(plan.nextPayment).toLocaleDateString('pt-BR') : '-'}</TableCell>
                  </TableRow>
                ))}
                {activePlans.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center text-gray-500">
                      Nenhum plano ativo
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </Card>

          {/* Cancelled Plans */}
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Planos Cancelados</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Plano</TableHead>
                  <TableHead>Preço</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Data Cancelamento</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cancelledPlans.map((plan) => (
                  <TableRow key={plan.id}>
                    <TableCell className="font-medium">{plan.name}</TableCell>
                    <TableCell>R$ {plan.price.toFixed(2)}</TableCell>
                    <TableCell>
                      <span className="px-2 py-1 rounded text-sm bg-red-100 text-red-800">
                        Cancelado
                      </span>
                    </TableCell>
                    <TableCell>{new Date(plan.nextPayment).toLocaleDateString('pt-BR')}</TableCell>
                  </TableRow>
                ))}
                {cancelledPlans.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center text-gray-500">
                      Nenhum plano cancelado
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </Card>
        </div>
      </div>
    </div>
  );
}
