package com.skillnext2;

import java.util.Scanner;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a number: ");
        int num = sc.nextInt();

        int reversed = 0;

        while (num != 0) {
            int digit = num % 10;       // extract last digit
            reversed = reversed * 10 + digit;  // build reversed number
            num /= 10;                 // remove last digit
        }

        System.out.println("Reversed number: " + reversed);
    }
}
