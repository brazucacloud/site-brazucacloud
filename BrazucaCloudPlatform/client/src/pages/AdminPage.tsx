import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card } from '@/components/ui/card';

interface Plan {
  id: string;
  name: string;
  description: string;
  price: number;
  status: string;
}

export default function AdminPage() {
  const [, setLocation] = useLocation();
  const [plans, setPlans] = useState<Plan[]>([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadUsers = async () => {
    try {
      const credentials = localStorage.getItem('credentials');
      const response = await fetch('/api/admin/users', {
        headers: {
          'Authorization': `Basic ${credentials}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to load users');
      }

      const data = await response.json();
      setUsers(data);
    } catch (error) {
      setError('Failed to load users: ' + error.message);
    }
  };
  const [error, setError] = useState<string | null>(null);
  const [setupRequired, setSetupRequired] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [adminData, setAdminData] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    checkSetupRequired();
    loadUsers();
  }, []);

  const checkSetupRequired = async () => {
    try {
      const response = await fetch('/api/admin/setup-required');
      const data = await response.json();
      setSetupRequired(data.setupRequired);
      if (!data.setupRequired) {
        checkAuth();
      }
      setLoading(false);
    } catch (error) {
      setError('Erro ao verificar status de configuração');
      setLoading(false);
    }
  };

  const handleSetup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await fetch('/api/admin/setup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(adminData)
      });

      if (response.ok) {
        const credentials = btoa(`${adminData.email}:${adminData.password}`);
        localStorage.setItem('credentials', credentials);
        setSetupRequired(false);
        setIsAuthenticated(true);
        await loadPlans();
      } else {
        const data = await response.json();
        setError(data.error || 'Falha ao criar conta de administrador');
      }
    } catch (error) {
      setError('Erro no servidor. Tente novamente.');
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const credentials = btoa(`${adminData.email}:${adminData.password}`);
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${credentials}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('credentials', credentials);
        localStorage.setItem('admin', JSON.stringify(data.admin));
        setIsAuthenticated(true);
        await loadPlans();
      } else {
        const data = await response.json();
        setError(data.error || 'Credenciais inválidas');
      }
    } catch (error) {
      setError('Erro no servidor. Tente novamente.');
    }
  };

  const loadPlans = async () => {
    try {
      const credentials = localStorage.getItem('credentials');
      if (!credentials) {
        throw new Error('Não autenticado');
      }

      const response = await fetch('/api/admin/plans', {
        headers: {
          'Authorization': `Basic ${credentials}`
        }
      });

      if (!response.ok) {
        throw new Error('Falha ao carregar planos');
      }

      const data = await response.json();
      setPlans(Array.isArray(data) ? data : []);
      setError(null);
    } catch (error) {
      setError('Falha ao carregar planos');
      if (error.message === 'Não autenticado') {
        setIsAuthenticated(false);
      }
    }
  };

  const checkAuth = async () => {
    const credentials = localStorage.getItem('credentials');
    if (!credentials) {
      setIsAuthenticated(false);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/admin/verify', {
        headers: {
          'Authorization': `Basic ${credentials}`
        }
      });

      if (response.ok) {
        setIsAuthenticated(true);
        await loadPlans();
      } else {
        setIsAuthenticated(false);
        localStorage.removeItem('credentials');
      }
    } catch (error) {
      setIsAuthenticated(false);
      localStorage.removeItem('credentials');
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (setupRequired) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Configuração Inicial
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Configure a conta de administrador
            </p>
          </div>

          <form onSubmit={handleSetup} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={adminData.email}
                onChange={(e) => setAdminData({ ...adminData, email: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Senha
              </label>
              <input
                id="password"
                type="password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={adminData.password}
                onChange={(e) => setAdminData({ ...adminData, password: e.target.value })}
              />
            </div>

            {error && (
              <div className="text-sm text-red-600 bg-red-50 p-3 rounded-md">
                {error}
              </div>
            )}

            <Button type="submit" className="w-full">
              Criar Conta
            </Button>
          </form>
        </Card>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md p-8">
          <div className="text-center mb-8">
            <img src="/src/assets/logo-brazuca-cloud.png" alt="Brazuca Cloud Logo" className="h-36 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900">
              Admin Login
            </h2>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={adminData.email}
                onChange={(e) => setAdminData({ ...adminData, email: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Senha
              </label>
              <input
                id="password"
                type="password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={adminData.password}
                onChange={(e) => setAdminData({ ...adminData, password: e.target.value })}
              />
            </div>

            {error && (
              <div className="text-sm text-red-600 bg-red-50 p-3 rounded-md">
                {error}
              </div>
            )}

            <Button type="submit" className="w-full">
              Entrar
            </Button>
          </form>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Painel Administrativo
          </h1>
          <Button
            variant="outline"
            onClick={() => {
              localStorage.removeItem('credentials');
              setIsAuthenticated(false);
            }}
          >
            Sair
          </Button>
        </div>

        <Card className="p-6 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Usuários</h2>
            <Button onClick={() => {
              const fullname = prompt('Nome completo:');
              const email = prompt('Email:');
              const phone = prompt('Telefone:');
              const password = prompt('Senha:');

              if (fullname && email && phone && password) {
                const credentials = localStorage.getItem('credentials');
                fetch('/api/admin/users', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Basic ${credentials}`
                  },
                  body: JSON.stringify({
                    fullname,
                    email,
                    phone,
                    password
                  })
                })
                .then(response => {
                  if (!response.ok) throw new Error('Failed to create user');
                  return response.json();
                })
                .then(() => {
                  alert('Usuário criado com sucesso!');
                })
                .catch(err => setError('Failed to create user: ' + err.message));
              }
            }}>Novo Usuário</Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Planos</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users?.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.fullname}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    {user.plans?.map((plan, idx) => (
                      <span key={idx} className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2 mb-1">
                        {plan.name}
                      </span>
                    ))}
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" onClick={async () => {
                      try {
                        const credentials = localStorage.getItem('credentials');
                        const plansResponse = await fetch('/api/admin/plans', {
                          headers: {
                            'Authorization': `Basic ${credentials}`
                          }
                        });
                        const plans = await plansResponse.json();
                        const activePlans = plans.filter(p => p.status === 'ativo');

                        if (activePlans.length === 0) {
                          alert('Não há planos ativos disponíveis');
                          return;
                        }

                        const planOptions = activePlans.map(p => `${p.id} - ${p.name}`).join('\n');
                        const planId = prompt(`Digite o ID do plano:\n\nPlanos disponíveis:\n${planOptions}`);

                        if (!planId) return;

                        if (!activePlans.some(p => p.id === planId)) {
                          alert('ID do plano inválido');
                          return;
                        }

                        const response = await fetch(`/api/admin/users/${user.id}/plans`, {
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Basic ${credentials}`
                          },
                          body: JSON.stringify({ planId })
                        });

                        if (!response.ok) throw new Error('Failed to add plan');
                        alert('Plano adicionado com sucesso!');
                        loadUsers();
                      } catch (err) {
                        setError('Failed to add plan: ' + (err as Error).message);
                      }
                    }}>
                      Adicionar Plano
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="text-red-600 hover:text-red-700"
                      onClick={() => {
                        if (confirm('Deseja remover este usuário?')) {
                          const credentials = localStorage.getItem('credentials');
                          fetch(`/api/admin/users/${user.id}`, {
                            method: 'DELETE',
                            headers: {
                              'Authorization': `Basic ${credentials}`
                            }
                          })
                          .then(response => {
                            if (!response.ok) throw new Error('Failed to delete user');
                            loadUsers();
                          })
                          .catch(err => setError('Failed to delete user: ' + err.message));
                        }
                      }}
                    >
                      Remover
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

        <Card className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Planos</h2>
            <Button onClick={async () => {
              try {
                const name = prompt('Nome do plano:');
                if (!name) return;

                const price = prompt('Preço do plano (ex: 99.90):');
                if (!price || isNaN(Number(price))) {
                  alert('Por favor insira um preço válido');
                  return;
                }

                const description = prompt('Descrição do plano:');
                if (!description) return;

                const credentials = localStorage.getItem('credentials');
                const admin = JSON.parse(localStorage.getItem('admin') || '{}');

                if (!admin.id) {
                  throw new Error('Admin ID not found. Please login again.');
                }

                // Generate a random 3-digit ID
                const planId = Math.floor(Math.random() * 900 + 100).toString();

                const response = await fetch('/api/admin/plans', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Basic ${credentials}`
                  },
                  body: JSON.stringify({
                    id: planId,
                    name,
                    price,
                    description,
                    status: 'inactive',
                    created_by: admin.id
                  })
                });

                if (!response.ok) {
                  const error = await response.json();
                  throw new Error(error.error || 'Falha ao criar plano');
                }

                await loadPlans();
                setError(null);
                alert('Plano criado com sucesso!');
              } catch (err) {
                setError('Falha ao criar plano: ' + (err as Error).message);
              }
            }}>Novo Plano</Button>
          </div>

          {error ? (
            <div className="text-sm text-red-600 bg-red-50 p-4 rounded-md mb-4">
              {error}
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Nome</TableHead>
                  <TableHead>Descrição</TableHead>
                  <TableHead>Preço</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {plans.map((plan) => (
                  <TableRow key={plan.id}>
                    <TableCell className="font-mono text-sm">{plan.id}</TableCell>
                    <TableCell>{plan.name}</TableCell>
                    <TableCell>{plan.description}</TableCell>
                    <TableCell>R$ {Number(plan.price).toFixed(2)}</TableCell>
                    <TableCell>
                      <span 
                        className={`cursor-pointer px-4 py-2 rounded-md text-center font-medium ${
                          plan.status === 'ativo' 
                            ? 'bg-green-100 hover:bg-green-200 text-green-800' 
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-800 text-lg'
                        }`}
                        onClick={async () => {
                          try {
                            const credentials = localStorage.getItem('credentials');
                            const newStatus = plan.status === 'ativo' ? 'inativo' : 'ativo';

                            const response = await fetch(`/api/admin/plans/${plan.id}`, {
                              method: 'PUT',
                              headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Basic ${credentials}`
                              },
                              body: JSON.stringify({
                                status: newStatus,
                                name: plan.name,
                                description: plan.description,
                                price: plan.price
                              })
                            });

                            if (!response.ok) {
                              throw new Error('Failed to update plan status');
                            }

                            await loadPlans();
                          } catch (err) {
                            setError('Failed to update plan status: ' + (err as Error).message);
                          }
                        }}
                      >
                        {plan.status === 'ativo' ? 'Ativo' : 'Inativo'}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={() => {
                          const newDescription = prompt('Nova descrição:', plan.description);
                          const newPrice = prompt('Novo preço:', plan.price);
                          const newStatus = prompt('Status (ativo/inativo):', plan.status);
                          if (newDescription && newPrice && newStatus) {
                            if (newStatus !== 'ativo' && newStatus !== 'inativo') {
                              alert('Status deve ser "ativo" ou "inativo"');
                              return;
                            }
                            const credentials = localStorage.getItem('credentials');
                            fetch(`/api/admin/plans/${plan.id}`, {
                              method: 'PUT',
                              headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Basic ${credentials}`
                              },
                              body: JSON.stringify({
                                description: newDescription,
                                price: newPrice,
                                status: newStatus
                              })
                            })
                            .then(response => {
                              if (response.ok) {
                                loadPlans();
                              } else {
                                throw new Error('Failed to update plan');
                              }
                            })
                            .catch(err => setError('Failed to update plan: ' + err.message));
                          }
                        }}>Editar</Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="text-red-600 hover:text-red-700"
                          onClick={() => {
                            if (confirm('Tem certeza que deseja remover este plano?')) {
                              const credentials = localStorage.getItem('credentials');
                              fetch(`/api/admin/plans/${plan.id}`, {
                                method: 'DELETE',
                                headers: {
                                  'Authorization': `Basic ${credentials}`
                                }
                              })
                              .then(response => {
                                if (response.ok) {
                                  loadPlans();
                                } else {
                                  throw new Error('Failed to delete plan');
                                }
                              })
                              .catch(err => setError('Failed to delete plan: ' + err.message));
                            }
                          }}
                        >
                          Remover
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
                {plans.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center text-gray-500 py-8">
                      Nenhum plano cadastrado
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          )}
        </Card>
      </div>
    </div>
  );
}