-- Admin-only waitlist reader for the HalalMapp admin portal.
-- Run once in Supabase → SQL editor (project jphdaraqmtlxraejkosk).
--
-- The public anon key can INSERT into waitlist_signups (marketing site).
-- This function lets signed-in admins SELECT those rows without opening
-- the table to every authenticated user.

create or replace function public.admin_list_waitlist_signups()
returns setof public.waitlist_signups
language plpgsql
security definer
set search_path = public
as $$
begin
  if not exists (
    select 1
    from public.users
    where id = auth.uid()
      and is_admin is true
  ) then
    raise exception 'Admin access required' using errcode = '42501';
  end if;

  return query
    select *
    from public.waitlist_signups;
end;
$$;

revoke all on function public.admin_list_waitlist_signups() from public;
grant execute on function public.admin_list_waitlist_signups() to authenticated;
