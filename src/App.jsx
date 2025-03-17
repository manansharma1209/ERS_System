import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { UserMenu } from './components/UserMenu';
import { ExpenseCard } from './components/ExpenseCard';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from './components/ui/Dialog';
import { Button } from './components/ui/Button';
import { PlusCircle } from 'lucide-react';

// Mock data - replace with actual API calls
const mockUser = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  isManager: true,
  department: 'Engineering',
  position: 'Senior Developer',
};

const mockExpenses = [
  {
    id: '1',
    userId: '1',
    category: 'TRAVEL',
    amount: 1200,
    description: 'Flight tickets for conference',
    status: 'PENDING',
    createdAt: '2024-03-10T10:00:00Z',
    updatedAt: '2024-03-10T10:00:00Z',
  },
  // Add more mock expenses as needed
];

function App() {
  const [activeTab, setActiveTab] = useState('requests');
  const [showProfileDialog, setShowProfileDialog] = useState(false);

  const handleLogout = () => {
    // Implement logout logic
    console.log('Logging out...');
  };

  const handleApprove = (id) => {
    // Implement approve logic
    console.log('Approving request:', id);
  };

  const handleReject = (id) => {
    // Implement reject logic
    console.log('Rejecting request:', id);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        isManager={mockUser.isManager}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <div className="flex-1 overflow-hidden">
        <header className="flex items-center justify-between border-b bg-white px-6 py-4">
          <h1 className="text-xl font-semibold">
            {activeTab === 'requests' ? 'My Requests' : 'Approve Requests'}
          </h1>
          <UserMenu
            user={mockUser}
            onLogout={handleLogout}
            onViewProfile={() => setShowProfileDialog(true)}
          />
        </header>

        <main className="h-[calc(100vh-4rem)] overflow-y-auto p-6">
          {activeTab === 'requests' && (
            <div className="mb-6">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    New Expense Request
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogTitle className="text-lg font-semibold">
                    New Expense Request
                  </DialogTitle>
                  {/* Form components */}
                </DialogContent>
              </Dialog>
            </div>
          )}

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {mockExpenses.map((expense) => (
              <ExpenseCard
                key={expense.id}
                expense={expense}
                isApprovalView={activeTab === 'approvals'}
                onApprove={handleApprove}
                onReject={handleReject}
              />
            ))}
          </div>
        </main>

        <Dialog open={showProfileDialog} onOpenChange={setShowProfileDialog}>
          <DialogContent>
            <DialogTitle className="text-lg font-semibold">
              My Profile
            </DialogTitle>
            <div className="mt-4 space-y-2">
              <p>
                <strong>Name:</strong> {mockUser.name}
              </p>
              <p>
                <strong>Email:</strong> {mockUser.email}
              </p>
              <p>
                <strong>Department:</strong> {mockUser.department}
              </p>
              <p>
                <strong>Position:</strong> {mockUser.position}
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default App;