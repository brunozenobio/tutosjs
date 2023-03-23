#include <iostream>
using namespace std;

bool isPalindrome(int x) {
    //completa la función
    int y,aux,z;
    bool pal;
    y=0;
    z=x;
    while (z%10>0){
        aux = z%10;
        y = aux + y*10;
        z=z/10;
        std::cout << y << std::endl;
    }
    if (y==x){
        pal = true ;
        return pal;
    }else{
        pal = false ;
        return pal;
    }
}

int main() {
    int n;
    cin >>n;
    
    if(isPalindrome(n)) {
        cout <<n<<" is a palindrome";
    }
    else {
        cout << n<<" is NOT a palindrome";
    }
    return 0;
}