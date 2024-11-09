import { userService } from '@/services/user.service';
import { Student } from '@/types/student';
import { useQuery } from '@tanstack/react-query';

export function useStudent(id: number) {
	const { data, isError } = useQuery({
		queryKey: ['student', id],
		queryFn: () => userService.getStudentById(id),
		select: (data) => data.data as Student,
		enabled: !!id,
	});

	return { data, isError };
}
