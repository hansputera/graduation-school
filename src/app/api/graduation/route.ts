import { vervalpd } from '@/lib/vervalpd';
import { initializeVervalCookieFile } from '@/utils/initializeCookieFile';
import { graduationCheck } from '@/validations/graduationCheck';
import { ArkErrors } from 'arktype';
import { NextRequest } from 'next/server';
import id from 'dayjs/locale/id.js';
import dayjs from 'dayjs';

export async function POST(request: NextRequest) {
  try {
    await initializeVervalCookieFile('/tmp/vervalpd-cookies');
    const json = await request.json();
    const payload = graduationCheck(json);

    if (payload instanceof ArkErrors) {
      return Response.json(
        {
          message: payload.summary,
          ok: false,
        },
        {
          status: 400,
        },
      );
    }

    const results = await vervalpd.findStudent(payload.nisn, 1);
    if (!results.length) {
      return Response.json(
        {
          message: 'Student not found',
          ok: false,
        },
        {
          status: 404,
        },
      );
    }

    const student = results[0];
    const studentDate = dayjs(student.born.date, 'DD MMM YYYY').locale(id);
    if (
      student.nisn !== payload.nisn.trim() ||
      !student.grade.endsWith('12') ||
      studentDate.date() !== payload.date.day ||
      studentDate.month() !== payload.date.month - 1 ||
      studentDate.year() !== payload.date.year
    ) {
      return Response.json(
        {
          message: 'Student not found',
          ok: false,
        },
        {
          status: 404,
        },
      );
    }

    const studentDetail = await vervalpd.getProfile(student.id);

    return Response.json(
      {
        data: {
          name: student.name,
          nisn: student.nisn,
          verval_id: student.id,
          grade: student.grade,
          gender: student.gender,
          born: student.born.date,
          profile: studentDetail
            ? {
                address: studentDetail.address,
                grade: studentDetail.grade,
                nis: studentDetail.nipd,
              }
            : null,
        },
      },
      {
        status: 200,
      },
    );
  } catch (e) {
    return Response.json(
      {
        message: 'Something was wrong, try again...',
        ok: false,
        catch: e,
      },
      {
        status: 500,
      },
    );
  }
}
