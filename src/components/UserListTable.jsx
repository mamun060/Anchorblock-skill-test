import { useGetUsersQuery } from '../feature/user/userApi';

export default function UserListTable() {
    const {data, isLoading } = useGetUsersQuery();
    console.log(data?.users)
  return (
    <div>
        <table className="w-full text-left">
            <thead className="text-[12px] font-semibold text-[#4E5D78] uppercase bg-[#FAFBFC]">
                <tr>
                    <th scope="col" className=" w-10 px-6 py-3">
                        #ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                        User
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                    OPTIONS
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    data  || !isLoading ? (
                        <>
                        {
                            data && data.users.map((user)=>{
                                <tr key={user.id} className="bg-white my-2">
                                    <th className="px-6 py-4 text-[#4E5D78] text-[14px] font-semibold text-left">
                                        {user.id}
                                    </th>
                                    <td className="px-6 py-4 text-[#4E5D78] text-[14px] font-semibold text-left">
                                    <div className=' flex items-center gap-3'>
                                        <img className='w-[60px] h-[60px]' src={user.avatar} alt="" />
                                        <span>{user.first_name}</span>
                                    </div>
                                    </td>
                                    <td className="px-6 py-4 text-[#4E5D78] text-[14px] font-semibold text-left">
                                        {user.email}
                                    </td>
                                    <td className="px-6 py-4 text-[#4E5D78] text-[14px] font-semibold text-left hover:cursor-pointer">
                                        .....
                                    </td>
                                </tr>
                            })
                        }
                        </>
                    ) : (
                        <div>
                            Loading....
                        </div>
                    )
                }
                
            </tbody>
        </table>
    </div>
  )
}
