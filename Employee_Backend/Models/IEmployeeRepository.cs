using Microsoft.AspNetCore.Mvc;

namespace Employee_Backend.Models
{
    public interface IEmployeeRepository
    {
        Task<ActionResult<Employee>?> GetEmployee(int id);

        Task<ActionResult<IEnumerable<Employee>>> GetAllEmployee();

        Task<ActionResult<Employee>> Add(Employee employee);
        Task<Employee> Update(int id, Employee employeeChanges);
        Task<Employee> Delete(int Id);

        Task<ActionResult<Employee>?> GetEmployeebymail(string em);


    }
}
