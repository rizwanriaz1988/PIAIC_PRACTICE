import Link from "next/link";
import React, { ReactNode } from "react";

export default function std_corner({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-ful justify-center flex">
    
    
    
        <div className="bg-gray-900 text-white my-1 py-1 w-7/12 justify-around items-center flex">
          <Link href="/add_result" className="hover:text-[#62ff4d] px-10 py-2">
            Add Result
          </Link>
          <Link href="/add_update_student" className="hover:text-[#62ff4d] px-10 py-2">
            Add/Update
          </Link>
          <Link href="/generate_report" className="hover:text-[#62ff4d] px-10 py-2">
            Report
          </Link>
          <Link href="/mark_attendance" className="hover:text-[#62ff4d] px-10 py-2">
            Mark Attendance
          </Link>
        </div>




      {children}
    </div>
  );
}
