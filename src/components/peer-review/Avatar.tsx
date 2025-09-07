"use client";
export const Avatar = ({
  children,
  isOnline,
  className = "",
}: {
  children: React.ReactNode;
  isOnline?: boolean;
  className?: string;
}) => {
  return (
    <div className={`relative ${className}`}>
      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-lg">
        {children}
      </div>
      {isOnline && (
        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
      )}
    </div>
  );
};
