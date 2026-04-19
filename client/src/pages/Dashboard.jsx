import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const createdAtText = user?.createdAt
    ? new Date(user.createdAt).toLocaleString()
    : 'Available after session refresh';

  return (
    <main className="min-h-screen px-4 py-10">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
        <header className="rounded-3xl border border-white/10 bg-white/95 px-6 py-5 text-slate-900 shadow-2xl shadow-black/30 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">AuthApp</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight">Welcome back, {user?.name}!</h1>
          <p className="mt-2 text-sm text-slate-600">Your account is active and your session is protected with JWT.</p>
        </header>

        <section className="rounded-3xl bg-white p-6 text-slate-900 shadow-2xl shadow-black/30 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Name</p>
              <p className="mt-2 text-lg font-medium">{user?.name}</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Email</p>
              <p className="mt-2 text-lg font-medium break-all">{user?.email}</p>
            </div>
          </div>

          <div className="mt-4 rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Account created</p>
            <p className="mt-2 text-lg font-medium">{createdAtText}</p>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-600">You can safely refresh the page. The session will restore from the API.</p>
            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 font-semibold text-black shadow-sm shadow-black/10 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              Logout
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Dashboard;
