import { Check, X } from 'lucide-react';
import { getCategoryIcon } from '@/lib/utils';
import { Button } from './ui/Button';

export function ExpenseCard({
  expense,
  isApprovalView,
  onApprove,
  onReject,
}) {
  const Icon = getCategoryIcon(expense.category);

  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-4">
          <div className="rounded-full bg-gray-100 p-3">
            <Icon className="h-6 w-6 text-gray-600" />
          </div>
          <div>
            <h3 className="text-lg font-medium">{expense.category}</h3>
            <p className="text-sm text-gray-500">
              ${expense.amount.toLocaleString()}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {isApprovalView && expense.status === 'PENDING' && (
            <>
              <Button
                variant="success"
                onClick={() => onApprove?.(expense.id)}
                className="h-8 w-8 p-0"
              >
                <Check className="h-4 w-4" />
              </Button>
              <Button
                variant="danger"
                onClick={() => onReject?.(expense.id)}
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </>
          )}
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-600">{expense.description}</p>
      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <span>Created: {new Date(expense.createdAt).toLocaleDateString()}</span>
        <span className="rounded-full bg-gray-100 px-3 py-1">
          {expense.status}
        </span>
      </div>
    </div>
  );
}