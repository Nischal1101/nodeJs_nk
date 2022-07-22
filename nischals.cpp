#include <iostream>
using namespace std;
class student
{
    int marks[5];
    int count = 0;

public:
    void setdata()
    {
        cout << "Enter marks of students" << endl;
        for (int i = 0; i < 5; i++)
        {
            cout << "Enter the marks of student " << i + 1 << endl;
            cin >> marks[i];
        }
    }
    void getdata()
    {
        cout << "Marks of students are" << endl;
        for (int i = 0; i < 5; i++)
        {
            cout << marks[i] << endl;
        }
    }
    void sort()

    {
        for (int i = 0; i < 5; i++)
        {
            for (int j = i + 1; j <= i; j++)
            {
                int temp;
                if (marks[i] > marks[j])
                {

                    temp = marks[i];
                    marks[i] = marks[j];
                    marks[j] = temp;
                }
            }
        }
    }

    void compare()
    {
        int n;
        cout << "Enter the marks of desired student " << endl;
        cin >> n;
        for (int i = 0; i < 5; i++)
        {
            if (marks[i] < n)
                count++;
        }
    }
    void display()
    {
        cout << "The Entered marks is greater than marks of " << count << " students" << endl;
    }
};

int main()
{
    student s;
    s.setdata();
    s.getdata();
    s.compare();
    s.display();

    return 0;
}