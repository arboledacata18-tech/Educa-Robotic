import RoboticsHeader from '@/components/robotics/header';

interface Props {
  children: React.ReactNode;
}

export default function RoboticsLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-white">
      <RoboticsHeader />
      <main>{children}</main>
    </div>
  );
}
